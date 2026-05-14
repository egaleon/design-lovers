const http = require('http');
const fs = require('fs');
const path = require('path');

const routes = ['/', '/about', '/gifts', '/contact'];
const distDir = path.join(__dirname, '..', 'dist');
const port = 3456;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const server = http.createServer((req, res) => {
  let filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, 'index.html');
  }
  
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

async function getBrowser() {
  const isVercel = process.env.VERCEL === '1';

  if (isVercel) {
    // Vercel build environment: use @sparticuz/chromium with puppeteer-core
    const puppeteer = require('puppeteer-core');
    const chromium = require('@sparticuz/chromium');
    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }

  // Local development: use full puppeteer (downloads its own Chromium)
  const puppeteer = require('puppeteer');
  return puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
}

async function prerender() {
  return new Promise((resolve, reject) => {
    server.listen(port, async (err) => {
      if (err) return reject(err);
      
      try {
        const browser = await getBrowser();
        const page = await browser.newPage();
        
        for (const route of routes) {
          const url = `http://localhost:${port}${route}`;
          await page.goto(url, { waitUntil: 'networkidle0' });
          await new Promise(r => setTimeout(r, 1500));
          
          const html = await page.content();
          
          const outputPath = route === '/' 
            ? path.join(distDir, 'index.html')
            : path.join(distDir, route, 'index.html');
          
          fs.mkdirSync(path.dirname(outputPath), { recursive: true });
          fs.writeFileSync(outputPath, html);
          console.log(`[prerender] ✓ ${route} -> ${outputPath}`);
        }
        
        await browser.close();
        server.close(() => resolve());
      } catch (error) {
        server.close();
        reject(error);
      }
    });
  });
}

prerender()
  .then(() => {
    console.log('[prerender] All routes prerendered successfully.');
  })
  .catch(err => {
    console.error('[prerender] Warning: prerender failed:', err.message);
    console.error('[prerender] The build will continue. SEO meta tags may not be pre-rendered in static HTML.');
    // Do NOT exit with error code — allow the build to succeed even if prerender fails
  });
