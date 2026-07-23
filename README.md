# Accredian Enterprise - Landing Page Clone

A pixel-accurate clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website built with **Next.js 15+ (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🚀 Live Demo

[View Live Demo](https://your-vercel-url.vercel.app) *(Replace with your actual deployment URL)*

## 📂 GitHub Repository

[https://github.com/Santosh9192/Accredian_clone](https://github.com/Santosh9192/Accredian_clone)

---

## 📋 Features

- **Landing Page**: 12 sections — Hero, Stats, Partnerships, Domain Expertise, Course Segmentation, Who Should Join, CAT Framework, How We Deliver Results, FAQ, Testimonials, Closing CTA, Footer
- **Fully Responsive**: Mobile-first design with adaptive layouts for all screen sizes
- **Smooth Animations**: Scroll-triggered fade-in animations, hover effects, micro-interactions
- **Lead Capture Modal**: Interactive form with field validation and success/error states
- **API Integration**: Next.js API route for lead data capture
- **Image-Based Sections**: Multiple sections use brand images for visual accuracy (Accredian Edge, CAT Framework, Course Segmentation, etc.)
- **Reusable Components**: Modular component architecture with TypeScript and centralized content
- **Navigation**: Fixed navbar with smooth scroll to section anchors
- **Accessibility**: Semantic HTML, ARIA attributes, keyboard navigation

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15+ (App Router)** | React framework with file-based routing |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling with custom theme |
| **next/font** | Optimized Poppins font loading |
| **IntersectionObserver** | Scroll-triggered animations |
| **Vercel** | Deployment platform |

---

## 📦 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

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

### Environment Variables (Optional)
```bash
# For email notifications or database (bonus feature)
# No env variables required for basic setup
```

---

## 🏗️ Project Structure

```
Accredian_clone/
├── public/
│   ├── corporate-big-hero-v4.png     # Hero section image
│   ├── imagehuman.png                 # Who Should Join image
│   ├── The%20Accredian%20Edge.png     # Accredian Edge panel image
│   ├── The_CAT_framework.svg          # CAT Framework diagram
│   ├── Program_specific.png           # Course Segmentation card
│   ├── Industry_specific.png
│   ├── Topic_specific.png
│   ├── Level_specific.png
│   └── logos/
│       ├── ADP.png                    # Partner logos
│       ├── BAYER.png
│       ├── CRIF.png
│       ├── HCL.png
│       ├── IBM.png
│       └── relience_industry_limited.png
├── src/
│   ├── app/
│   │   ├── api/leads/route.ts         # Lead capture API
│   │   ├── globals.css                # Tailwind v4 + brand theme + animations
│   │   ├── layout.tsx                 # Root layout, SEO, Poppins font
│   │   └── page.tsx                   # Main page (composes all sections)
│   ├── components/
│   │   ├── Navbar.tsx                 # Fixed header with mobile menu & smooth scroll
│   │   ├── HeroSection.tsx            # Hero: heading, tags, CTA, corporate image
│   │   ├── StatsSection.tsx           # 10K+, 200+, 5K+ stats cards
│   │   ├── PartnershipsSection.tsx    # Client logos + Accredian Edge card panel
│   │   ├── DomainExpertiseSection.tsx # 7 domain cards (3-3-1 grid)
│   │   ├── CourseSegmentationSection.tsx # 4 course type image cards
│   │   ├── WhoShouldJoinSection.tsx   # Box panel: heading, image, 4 cards
│   │   ├── HowItWorksSection.tsx      # CAT Framework image section
│   │   ├── DeliveryResultsSection.tsx # 3-step process cards
│   │   ├── FAQSection.tsx             # Left/right layout: categories + accordion
│   │   ├── TestimonialsSection.tsx    # ADP, Bayer, Reliance quotes
│   │   ├── ClosingCtaSection.tsx      # CTA banner with contact buttons
│   │   ├── LeadCaptureModal.tsx       # Modal form with validation
│   │   └── Footer.tsx                 # Links, social media, contact info
│   └── data/
│       └── content.ts                 # All centralized content & navigation data
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🎯 Sections Breakdown

| # | Section | Component | Key Content |
|---|---|---|---|
| 1 | **Hero** | `HeroSection.tsx` | "Next-Gen Expertise" + "For Your Enterprise" heading, tags, CTA, corporate image |
| 2 | **Stats** | `StatsSection.tsx` | 10K+ professionals, 200+ sessions, 5K+ learners |
| 3 | **Partnerships** | `PartnershipsSection.tsx` | 6 client logos (Reliance, HCL, IBM, CRIF, ADP, Bayer) + Accredian Edge card panel with image |
| 4 | **Domain Expertise** | `DomainExpertiseSection.tsx` | 7 domain cards (3-3-1 grid) with colored badges |
| 5 | **Course Segmentation** | `CourseSegmentationSection.tsx` | 4 image cards: Program, Industry, Topic, Level Specific |
| 6 | **Who Should Join** | `WhoShouldJoinSection.tsx` | Box panel with heading, human image, 4 professional cards |
| 7 | **CAT Framework** | `HowItWorksSection.tsx` | The CAT Framework image |
| 8 | **How We Deliver** | `DeliveryResultsSection.tsx` | 3-step process: Skill Gap Analysis, Customized Training, Flexible Delivery |
| 9 | **FAQ** | `FAQSection.tsx` | Left/right layout: 3 categories + accordion questions |
| 10 | **Testimonials** | `TestimonialsSection.tsx` | ADP, Bayer, Reliance partner quotes |
| 11 | **Closing CTA** | `ClosingCtaSection.tsx` | Contact Us + Enquire Now buttons |
| 12 | **Footer** | `Footer.tsx` | Quick links, social media (LinkedIn, Twitter, YouTube, Instagram, Facebook), copyright |

---

## 🎯 Approach Taken

### 1. Research & Planning
- Referenced the live Accredian Enterprise website at [enterprise.accredian.com](https://enterprise.accredian.com/)
- Extracted all section content, headings, button labels, statistics, testimonials, and layout structure
- Documented brand colors: primary blue (`#1a73e8`), dark text (`#11101d`), gray tones
- Collected brand images from the reference site for accurate visual reproduction

### 2. Architecture Decisions
- **Next.js App Router**: Chosen for file-based routing, server components, and built-in API routes
- **Client Components**: Used `"use client"` only where interactivity needed (modals, animations, accordions)
- **Centralized Content**: All text data in `src/data/content.ts` for easy editing; separate from presentation
- **TypeScript**: Strict mode for type safety across all components and data structures
- **No External Animation Libraries**: Used native IntersectionObserver + Tailwind transitions for performance

### 3. Component Design
- **Modular**: Each section is an independent component, easy to reorder or modify
- **Reusable Patterns**: Card grids, pill badges, animated containers extracted as reusable patterns
- **Scroll Animations**: IntersectionObserver with staggered delays for smooth reveal effects
- **State Management**: Local state for modal, accordion, FAQ category selection, scroll visibility

### 4. Styling Strategy
- **Tailwind CSS v4**: Utility-first with `@theme inline` for brand colors and custom properties
- **Custom Animations**: `animate-fade-in-up`, `animate-fade-in` keyframes defined in `globals.css`
- **Mobile-First**: Responsive breakpoints (`sm`, `md`, `lg`, `xl`) for all screen sizes
- **Brand Consistency**: Single source of truth for colors via Tailwind theme

### 5. API Integration
- **POST /api/leads**: Captures lead form data with server-side validation
- **In-Memory Storage**: Simple array-based storage for demo purposes
- **UI States**: Loading spinner, success toast, error handling in the modal

---

## 🤖 AI Usage Explanation

AI tools (Claude, ChatGPT, GitHub Copilot) were used strategically throughout development to accelerate the process while maintaining quality control.

### Where AI Helped

| Task | How AI Assisted |
|---|---|
| **Content extraction** | Analyzed reference site data to extract all text, headings, and structure |
| **Component scaffolding** | Generated initial structure for all 14 components |
| **Tailwind suggestions** | Recommended optimal utility class combinations for responsive layouts |
| **Animation logic** | Assisted with IntersectionObserver patterns and CSS keyframe animations |
| **Data architecture** | Helped design the centralized content data structure |
| **Code review** | Automated review of changes for TypeScript correctness, accessibility, and best practices |
| **Debugging** | Identified issues like missing section IDs, incorrect image paths, broken nav scroll |
| **Responsive design** | Suggested breakpoint adjustments for optimal mobile/tablet/desktop experience |

### What I Modified / Improved Manually

| Area | Manual Improvements |
|---|---|
| **Content accuracy** | Cross-referenced all text against the actual reference site, fixed mismatches in headings, stats, testimonials |
| **Image handling** | Fixed SVG-files-disguised-as-PNG issue for ADP/Bayer logos; copied correct PNG files |
| **Color precision** | Fine-tuned brand colors to match the real site exactly |
| **Section layout** | Restructured FAQ into left/right layout; rebuilt Who Should Join as a box panel; adjusted section alignment |
| **Navigation** | Added smooth scroll anchors; fixed "How It Works" nav to scroll to correct section |
| **Font sizes** | Manually adjusted heading/subtitle font sizes based on user feedback |
| **Accessibility** | Added `aria-expanded`, `aria-label`, semantic HTML, `target="_blank"` with `rel="noopener noreferrer"` |
| **Code cleanup** | Removed unused imports, dead code, duplicate components, orphaned state variables |
| **Responsive behavior** | Manually tuned breakpoints for consistent cross-device experience |

### Key Principle
AI was used as an **accelerator and assistant** — generating initial structure, suggesting patterns, and catching issues. Every component, color, font size, and layout decision was manually reviewed, tested, and refined based on the actual reference and user feedback.

---

## 💡 Improvements with More Time

### 1. Multi-Page Architecture
- **Curriculum Page**: Dedicated page for each domain with detailed course outlines
- **Case Studies Page**: In-depth success stories from ADP, Bayer, Reliance partnerships
- **About Page**: Company mission, team, and leadership information
- **Blog/Resources**: Articles on AI upskilling, workforce transformation trends

### 2. Backend Infrastructure
- **Database Integration**: Connect lead capture to MongoDB/PostgreSQL for persistent storage
- **Email Notifications**: Send confirmation emails to leads and notification to sales team via SendGrid
- **Admin Dashboard**: Secure portal to view, filter, and manage captured leads
- **Authentication**: Role-based access for admin users

### 3. Performance Optimizations
- **Image Optimization**: Replace PNG images with optimized WebP/AVIF formats
- **Code Splitting**: Dynamic imports for heavy sections (FAQ, Testimonials)
- **Caching**: Implement ISR (Incremental Static Regeneration) for content updates
- **Bundle Analysis**: Reduce JavaScript bundle size with tree-shaking and lazy loading

### 4. Enhanced UI/UX
- **Dark Mode**: Theme toggle with system preference detection
- **Advanced Animations**: Framer Motion for page transitions and parallax scrolling
- **Micro-interactions**: Ripple effects on buttons, smooth tab transitions
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
- **Live Chat**: Integrate with customer support tools
- **PWA**: Offline support, service workers, installable web app

### 7. Developer Experience
- **Storybook**: Component library with isolated development and documentation
- **Husky + lint-staged**: Pre-commit hooks for linting and formatting
- **CI/CD**: GitHub Actions for automated testing and deployment
- **Environment Variables**: Proper `.env` management for API keys and secrets

---

## 📸 Screenshots

*(Add screenshots of your deployed site here for visual reference)*

---

## 📄 License

This project was built as a partial clone assignment for evaluation purposes.

---

*Built with ❤️ using Next.js, TypeScript, and Tailwind CSS*
