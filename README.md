# Accredian Enterprise - Landing Page Clone

A pixel-accurate clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## 🚀 Live Demo

[View Live Demo](https://your-vercel-url.vercel.app) *(Replace with your actual deployment URL)*

## 📋 Features

- **Landing Page**: 11 sections faithfully recreated — Hero, Stats, Partnerships, Domain Expertise, Accredian Edge, Course Segmentation, Who Should Join, CAT Framework, FAQ, Testimonials, Closing CTA, Footer
- **Fully Responsive**: Mobile-first design with adaptive layouts for all screen sizes
- **Smooth Animations**: Scroll-triggered fade-in animations, hover effects, micro-interactions
- **Lead Capture Modal**: Interactive form with field validation and success/error states
- **API Integration**: Next.js API route for lead data capture (bonus feature)
- **Reusable Components**: Modular component architecture with TypeScript and centralized content
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom animations
- **Font**: Poppins (via next/font)
- **Deployment**: Vercel (recommended)

## 📦 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/Santosh9192/Accredian_clone.git
cd Accredian_clone

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit http://localhost:3000

# 5. Build for production
npm run build

# 6. Start production server
npm start
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts            # Lead capture API (POST + GET)
│   ├── globals.css                 # Tailwind v4 + brand theme + animations
│   ├── layout.tsx                  # Root layout, SEO metadata, Poppins font
│   └── page.tsx                    # Main page composing all 11 sections
├── components/
│   ├── Navbar.tsx                  # Fixed header with mobile hamburger menu
│   ├── HeroSection.tsx             # "Next-Gen Expertise for Your Enterprise"
│   ├── StatsSection.tsx            # Track Record: 10K+, 200+, 5K+
│   ├── PartnershipsSection.tsx     # Client logo grid ("Our Proven Partnerships")
│   ├── DomainExpertiseSection.tsx  # 7 domain cards with skill tags
│   ├── AccredianEdgeSection.tsx    # 4 feature cards ("The Accredian Edge")
│   ├── CourseSegmentationSection.tsx # Program/Industry/Topic/Level Specific
│   ├── WhoShouldJoinSection.tsx    # 4 professional type cards
│   ├── HowItWorksSection.tsx       # CAT Framework: 3-step process
│   ├── FAQSection.tsx              # Accordion with 3 categories
│   ├── TestimonialsSection.tsx     # ADP, Bayer, Reliance quotes
│   ├── ClosingCtaSection.tsx       # Dark gradient CTA banner
│   ├── Footer.tsx                  # Links, contact, copyright
│   └── LeadCaptureModal.tsx        # Modal form with validation + API submission
└── data/
    └── content.ts                  # All centralized content data
```

## 🎯 Approach Taken

### 1. Research & Planning
- Analyzed the live Accredian Enterprise website by extracting content from the JavaScript bundle and CSS files
- Identified 11 distinct sections, their exact heading text, button labels, statistics, and layout structure
- Documented the brand color palette: primary blue (#007aff), dark navy (#11101d), teal/cyan gradients

### 2. Architecture Decisions
- **Next.js App Router**: Chosen for file-based routing, server components, and API routes
- **Client vs Server Components**: Used `"use client"` only where interactivity needed (modals, animations, form state). Footer and layout remain server components
- **Centralized Content**: All text data lives in `src/data/content.ts` for easy editing and maintenance
- **TypeScript**: Strict mode enabled for type safety across all components

### 3. Component Design
- Each section is an independent, self-contained component
- Reusable patterns extracted: card grids, animated containers, form inputs
- Scroll-triggered animations via IntersectionObserver for performance
- State lifted where needed (modal state shared via parent components)

### 4. Styling Strategy
- Tailwind CSS v4 with `@theme inline` for brand custom properties
- Custom keyframe animations defined in globals.css
- Poppins font loaded via `next/font` for optimal performance (no FOUT)
- Mobile-first responsive design with Tailwind breakpoints

### 5. API Layer
- Next.js API route at `/api/leads` with POST handler
- Form validation: required fields, email regex validation
- In-memory storage with GET endpoint for inspection
- Loading, success, and error states in the UI

## 🤖 AI Usage Explanation

AI tools (Claude/ChatGPT/GitHub Copilot) were used strategically throughout development:

### Where AI Helped:
- **Research**: Initial extraction of content from the reference site's JS bundle and CSS
- **Component scaffolding**: Generated initial structure for all 14 components
- **Tailwind utility suggestions**: Recommended optimal combinations for responsive layouts
- **Animation logic**: Assisted with IntersectionObserver patterns for scroll animations
- **Data architecture**: Helped design the centralized content data structure
- **Bug detection**: Identified issues like missing navbar offset, ARIA attributes, and unused imports
- **Code review**: Automatically reviewed changes for TypeScript correctness and best practices

### What I Modified / Improved Manually:
- **Content accuracy**: Cross-referenced all text against the actual reference site data provided by the user, fixing mismatches in headings, stats, testimonials, and footer
- **Section order**: Reorganized section flow based on the actual site structure
- **Color precision**: Fine-tuned brand colors (#007aff blue, #11101d dark, teal gradients) to match the real site exactly
- **Responsive behavior**: Manually adjusted breakpoints for optimal mobile/tablet/desktop experience
- **Accessibility**: Added `aria-expanded`, `aria-label`, and semantic HTML beyond AI suggestions
- **Font loading**: Switched from CSS `@import` to `next/font` for performance
- **Code cleanup**: Removed unused data exports, dead code, and redundant CSS
- **Form validation**: Enhanced validation logic with proper error handling

### Key Principle
AI was used as an **accelerator and assistant** — not a replacement for engineering decisions. Every component was reviewed, refined, and adjusted manually to ensure quality.

## 💡 Improvements with More Time

Given additional time, I would make these improvements:

### 1. Multi-Page Architecture
- **Curriculum Page**: Dedicated page for each domain with detailed course outlines
- **Case Studies Page**: In-depth success stories from ADP, Bayer, Reliance partnerships
- **About Page**: Company mission, team, and leadership information
- **Blog/Resources**: Articles on AI upskilling, workforce transformation trends

### 2. Backend Infrastructure
- **Database Integration**: Connect lead capture to MongoDB/PostgreSQL for persistent storage
- **Email Notifications**: Send confirmation emails to leads and notification to sales team via Nodemailer/SendGrid
- **Admin Dashboard**: Secure portal to view, filter, and manage captured leads
- **Authentication**: Role-based access for admin users

### 3. Performance Optimizations
- **Image Optimization**: Replace placeholder graphics with optimized WebP/AVIF images
- **Code Splitting**: Dynamic imports for heavy sections (FAQ, Testimonials)
- **Caching**: Implement ISR (Incremental Static Regeneration) for content-heavy pages
- **Bundle Analysis**: Reduce JavaScript bundle size with tree-shaking

### 4. Enhanced UI/UX
- **Dark Mode**: Theme toggle with system preference detection using next-themes
- **Advanced Animations**: Framer Motion for page transitions, parallax scrolling, and staggered reveals
- **Micro-interactions**: Ripple effects on buttons, smooth tab transitions in FAQ
- **Loading States**: Skeleton loaders for async content sections

### 5. Testing & Quality
- **Unit Tests**: Jest + React Testing Library for component behavior
- **Integration Tests**: Cypress for end-to-end user flows (form submission, navigation)
- **Accessibility Audit**: Full WCAG 2.1 AA compliance check with axe-core
- **Visual Regression**: Chromatic or Percy for UI snapshot testing

### 6. Additional Features
- **i18n**: Multi-language support (English, Hindi, etc.)
- **Analytics**: Vercel Analytics + Google Analytics for user behavior tracking
- **SEO**: Structured data (JSON-LD), sitemap.xml, robots.txt
- **Live Chat**: Integrate with customer support tools like Intercom or Crisp
- **PWA**: Offline support, service workers, and installable web app

### 7. Developer Experience
- **Storybook**: Component library with isolated development and documentation
- **Husky + lint-staged**: Pre-commit hooks for linting and formatting
- **CI/CD**: GitHub Actions for automated testing and deployment
- **Environment Variables**: Proper .env management for API keys

