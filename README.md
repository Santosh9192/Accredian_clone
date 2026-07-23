# Accredian Enterprise Landing Page Clone

A responsive, component-driven recreation of the **Accredian Enterprise** landing page built using **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

This project was developed as part of a **Full Stack Developer Internship Assignment** with a focus on modern frontend development practices, reusable components, responsive UI, API integration, performance optimization, and AI-assisted development.

---

## 🚀 Live Demo

🌐 **Deployed Application**

https://accredian-clone-puce-tau.vercel.app/

---

## 💻 GitHub Repository

https://github.com/Santosh9192/Accredian_clone

---

# 📋 Project Overview

The Accredian Enterprise Clone is a single-page enterprise landing website consisting of multiple responsive sections designed to showcase professional training solutions.

The application recreates the complete landing page experience with:

- Modern responsive layouts
- Reusable React components
- Interactive UI elements
- Lead capture functionality
- API integration
- Scroll-based animations
- SEO optimization
- Production deployment on Vercel

---

# ✨ Features

## Landing Page

Implemented sections:

- Hero Section
- Statistics Section
- Partnerships Section
- Domain Expertise
- Course Segmentation
- Who Should Join
- CAT Framework
- How We Deliver Results
- FAQ Section
- Testimonials
- Closing CTA
- Footer

---

## Functional Features

### Navigation

- Sticky navbar
- Smooth scrolling between sections
- Responsive mobile menu
- Section-based navigation

### Lead Capture

- Interactive lead capture modal
- Form validation
- Loading states
- Success/error handling
- API integration using Next.js Route Handlers

### FAQ

- Interactive accordion
- Category-based questions
- Smooth expand/collapse animation

### Animations

- Scroll-triggered animations
- Fade-in effects
- Hover interactions
- Smooth transitions

---

# 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | React Framework with App Router |
| React 19 | Component Development |
| TypeScript | Type Safety |
| Tailwind CSS v4 | Styling System |
| Next/Image | Image Optimization |
| Next.js API Routes | Backend API |
| Vercel | Deployment Platform |

---

# 📂 Project Structure

```
Accredian_clone/
│
├── public/
│   ├── corporate-big-hero-v4.png
│   ├── imagehuman.png
│   ├── The_CAT_framework.png
│   ├── Program_specific.png
│   ├── Industry_specific.png
│   ├── Topic_specific.png
│   ├── Level_specific.png
│   └── logos/
│
├── src/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   └── leads/
│   │   │       └── route.ts
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── PartnershipsSection.tsx
│   │   ├── DomainExpertiseSection.tsx
│   │   ├── CourseSegmentationSection.tsx
│   │   ├── WhoShouldJoinSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── DeliveryResultsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ClosingCtaSection.tsx
│   │   ├── LeadCaptureModal.tsx
│   │   └── Footer.tsx
│   │
│   └── data/
│       └── content.ts
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

# 🏗 Architecture Approach

The application follows a **component-driven architecture**.

Each landing page section is developed as an independent reusable component.

## Architecture Principles

### Component Separation

Each section has:

- Independent UI logic
- Own styling
- Reusable patterns
- Clear responsibility

### Centralized Content

All static content such as:

- Navigation links
- Statistics
- Testimonials
- FAQs
- Social links

is maintained inside:

```
src/data/content.ts
```

This keeps UI components clean and makes future updates easier.

---

# 🎯 Component Overview

| Component | Responsibility |
|-|-|
| Navbar | Navigation and mobile menu |
| HeroSection | Main landing introduction |
| StatsSection | Business statistics |
| PartnershipsSection | Client logos and trust section |
| DomainExpertiseSection | Domain cards |
| CourseSegmentationSection | Course categories |
| WhoShouldJoinSection | Target audience section |
| HowItWorksSection | CAT Framework |
| DeliveryResultsSection | Delivery workflow |
| FAQSection | FAQ accordion |
| TestimonialsSection | Customer reviews |
| ClosingCtaSection | Final CTA |
| Footer | Website footer |

---

# 🔌 API Integration

The project includes a Next.js API endpoint:

```
POST /api/leads
```

## API Responsibilities

- Receive lead information
- Validate required fields
- Validate email format
- Process submission
- Return success/error response

Example request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Inc",
  "phone": "9999999999",
  "message": "Interested in enterprise training"
}
```

The current implementation uses in-memory storage for demonstration purposes and can easily be extended with:

- MongoDB
- PostgreSQL
- Supabase
- Firebase

---

# ⚡ Performance Optimization

Implemented optimizations:

- Next.js Image component
- Lazy loading for below-the-fold images
- Optimized font loading using next/font
- Mobile-first responsive design
- Reduced unnecessary client-side rendering
- Lightweight native animations

---

# 🎨 Animation System

Animations are implemented using the native browser:

```
IntersectionObserver API
```

instead of external animation libraries.

Benefits:

- Better performance
- Less dependency overhead
- Smooth scrolling experience

Implemented animations:

- Fade-in effects
- Slide animations
- Scale animations
- Hover interactions
- Modal transitions

---

# 🔍 SEO Improvements

Implemented:

- Page metadata
- Title and description
- Open Graph tags
- Semantic HTML
- Proper heading hierarchy
- Optimized font loading

---

# ♿ Accessibility

Accessibility improvements include:

- Semantic HTML elements
- ARIA attributes
- Keyboard-friendly navigation
- Accessible buttons
- Proper image alt text
- Responsive layouts

---

# 🤖 AI Usage

AI tools used:

- ChatGPT
- Claude
- GitHub Copilot

AI was used as a development assistant.

## AI Helped With

- Project architecture planning
- Component structure suggestions
- Tailwind CSS improvements
- Debugging issues
- TypeScript guidance
- Code review
- Documentation improvements

---

## Manual Improvements

All AI-generated suggestions were manually reviewed, modified, and tested.

Manual improvements included:

- UI refinements
- Responsive adjustments
- Component restructuring
- Accessibility improvements
- API implementation
- Performance optimization
- Image path corrections
- Deployment fixes

---

# 🚧 Challenges Faced

During development, the main challenges were:

## Responsive Design

Ensuring consistent UI behavior across:

- Mobile devices
- Tablets
- Desktop screens

## Component Organization

Creating reusable components while maintaining clean code structure.

## Asset Management

Handling image paths and optimizing static assets for production deployment.

## Deployment

Resolving production-specific issues during Vercel deployment.

All issues were solved through debugging, testing, and iterative improvements.

---

# 🚀 Getting Started

## Prerequisites

- Node.js 18+
- npm

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Santosh9192/Accredian_clone.git
```

Navigate to project:

```bash
cd Accredian_clone
```

Install dependencies:

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Production Build

Create production build:

```bash
npm run build
```

Start production server:

```bash
npm start
```

---

# 🌍 Deployment

The project is deployed using:

## Vercel

Deployment includes:

- Automatic builds
- GitHub integration
- HTTPS
- Production optimization
- Continuous deployment

Live:

https://accredian-clone-puce-tau.vercel.app/

---

# 🔮 Future Improvements

With additional time, I would add:

- Database integration
- Admin dashboard
- Authentication
- Email notifications
- CMS integration
- Advanced analytics
- Dark mode
- Automated testing
- Docker support
- CI/CD pipeline
- Progressive Web App support

---

# 📚 Key Learnings

This project improved my understanding of:

- Next.js App Router
- React component architecture
- TypeScript development
- Tailwind CSS
- API Routes
- Responsive design
- Accessibility
- Performance optimization
- Vercel deployment
- AI-assisted development

---

# 🙏 Acknowledgement

This project was developed as part of the **Full Stack Developer Internship Assignment**.

The objective was to demonstrate modern frontend engineering practices, scalable component architecture, responsive UI development, API integration, and effective usage of AI tools while ensuring all final implementation decisions were manually reviewed and refined.

---

# 👨‍💻 Developer

**Santosh Tukaram Babar**

GitHub:
https://github.com/Santosh9192

Email:
santoshbabar919200@gmail.com

---

# 📄 License

This project is created for educational and evaluation purposes only.
