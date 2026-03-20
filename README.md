# Design Lovers - Event Styling & Decoration

A premium event styling and decoration website for Sydney-based celebrations.

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from project root:**
   ```bash
   vercel
   ```

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/design-lovers.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite + React settings
   - Click "Deploy"

### Option 3: Deploy via Vercel Dashboard (Zip Upload)

1. **Build locally first:**
   ```bash
   npm install
   npm run build
   ```

2. **Go to [vercel.com](https://vercel.com)**
   - Click "Add New Project"
   - Select "Import Git Repository" or use "Upload" option
   - Deploy

## 📝 Environment Variables

No environment variables required for this static site.

## 🛠 Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📁 Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Route pages (Home, About, Gifts, Contact)
├── App.jsx        # Main app with routing
└── main.jsx       # Entry point
```

## 🎨 Features

- Responsive design
- Smooth scroll navigation
- Animated sections
- Service modals
- Gift collection with filters
- Contact form with quote request
- SEO optimized content

## 📞 Support

For questions or issues, contact: hello@designlovers.com.au
