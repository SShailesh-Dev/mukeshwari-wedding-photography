# Mukheshwari Wedding Photography

An editorial wedding photography portfolio designed for the soulful and intentional. This application showcases a luxury aesthetic with cinematic storytelling, capturing the poetry of union in Prayagraj and worldwide.

![Mukheshwari Wedding Photography](https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200)

## ✨ Features

- **Cinematic Visuals**: High-impact hero sections with smooth animations and parallax effects using `motion` (Framer Motion).
- **Luxury Editorial Aesthetic**: A carefully crafted design system using Tailwind CSS 4, focusing on typography and whitespace.
- **Interactive Booking Experience**:
  - **Global Booking Modal**: Accessible from any "Book Now" button across the site via React Context.
  - **Multi-step Form**: A seamless user journey for inquiries with real-time validation.
  - **Accessibility First**: Implemented focus trapping and ARIA roles for a fully accessible modal experience.
- **Smooth Navigation**:
  - Integrated `lenis` for high-performance smooth scrolling.
  - Dynamic routing with `react-router-dom` v7.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Comprehensive Pages**:
  - **Portfolio**: Categorized galleries with detailed story views.
  - **Experience**: Insight into the creative process and philosophy.
  - **Pricing**: Transparent investment packages.
  - **Team**: Meet the artisans behind the lens.
  - **Testimonials**: Kind words from real couples.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [motion/react](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Utilities**: `clsx`, `tailwind-merge`

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure

- `src/components`: Reusable UI components (Buttons, Modals, Layout, etc.).
- `src/context`: Global state management (BookingContext).
- `src/pages`: Individual page components (Home, Portfolio, Team, etc.).
- `src/lib`: Shared utility functions.
- `src/types`: TypeScript definitions.
- `src/index.css`: Global styles and Tailwind configuration.

## 🔒 Security & Accessibility

- **Focus Trapping**: The booking modal traps focus to ensure keyboard accessibility.
- **Input Validation**: Strict regex-based validation for emails and phone numbers.
- **Safe Links**: All external links use `rel="noopener noreferrer"`.
- **Referrer Policy**: Images are served with `no-referrer` where necessary.

## 📄 License

This project is licensed under the Apache-2.0 License.

---

*Captured with soul. Preserved with intention.*
