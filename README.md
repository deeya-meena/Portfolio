# ⚡ Deeya Meena - Personal Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18-0055FF?style=for-the-badge&logo=framer)

A modern, highly interactive, and responsive developer portfolio website built for **Deeya Meena** — B.Tech ECE Student at IIIT Bhopal, Full Stack Developer, and AI & Cloud Enthusiast.

---

## ✨ Features & Production Optimizations

- 🎨 **Modern Glassmorphism UI**: Dynamic dark/light theme switching, smooth gradients, particle canvas effects, and magnetic interactive buttons.
- ⚡ **Bundle Size & Performance**: Pre-rendered static pages, zero unnecessary router overhead, SWC minification, and optimized asset delivery.
- 🔍 **Complete SEO Metadata**: Automated `sitemap.xml`, `robots.txt`, open graph share preview cards (`1200x630`), and dynamic SVG favicon (`/icon`).
- 📱 **Fully Responsive**: Mobile-first layout seamlessly tested across desktop, tablet, and mobile browsers.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & PostCSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Devicon](https://devicon.dev/)

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended 🚀)

Vercel provides zero-configuration deployment for Next.js App Router with automatic HTTPS and instant edge CDN.

#### Via Vercel Dashboard (1-Click Deployment):
1. Push your repository to GitHub: `https://github.com/deeya-meena/Portfolio`
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your `Portfolio` repository.
4. Keep framework preset as **Next.js** and click **Deploy**.
5. Vercel will automatically build and deploy your portfolio live!

#### Via Vercel CLI:
```bash
npm install -g vercel
vercel
```

---

### Option 2: Deploy to GitHub Pages (Automated GitHub Actions)

This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml` that builds and deploys static export pages to GitHub Pages on every push to `main`.

#### Setup GitHub Pages in 2 steps:
1. Go to your GitHub repository: `https://github.com/deeya-meena/Portfolio`
2. Open **Settings** -> **Pages** -> Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**
3. Push to `main` branch. GitHub Actions will automatically run, build static HTML, and publish your website live at:
   `https://deeya-meena.github.io/Portfolio`

---

## 🚀 Local Development Setup

### Prerequisites
Node.js (v18 or higher) & npm.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/deeya-meena/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build production bundle**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
Portfolio/
├── app/                  # Next.js App Router (pages, layout, sitemap, robots, OG image)
│   ├── icon.tsx          # Dynamic SVG Favicon Generator
│   ├── opengraph-image.tsx # Dynamic Open Graph Social Share Card (1200x630)
│   ├── sitemap.ts        # Automated sitemap.xml generator
│   └── robots.ts         # Automated robots.txt generator
├── components/           # UI components (Hero, Navbar, About, Skills, Projects, etc.)
│   └── effects/          # Micro-animations & visual effect wrappers
├── data/                 # Portfolio content & skills configuration
├── types/                # TypeScript interface definitions
├── .github/workflows/    # Automated CI/CD deployment workflows
├── next.config.mjs       # Next.js build configuration
└── tailwind.config.ts    # Tailwind CSS configuration
```

---

## 📬 Contact & Connect

- **Name**: Deeya Meena
- **Education**: IIIT Bhopal (ECE 2023 - 2027)
- **Email**: [deeyadiga2833@gmail.com](mailto:deeyadiga2833@gmail.com)
- **LinkedIn**: [deeya-meena](https://www.linkedin.com/in/deeya-meena-933406292)
- **GitHub**: [@deeya-meena](https://github.com/deeya-meena)

---

⭐ *If you find this portfolio helpful, feel free to give it a star on GitHub!*
