# Mall of America — Interactive Partner Deck

An immersive, cinematic, and interactive sales tool designed for Mall of America. This platform replaces traditional static slide decks with a dynamic, non-linear storytelling experience built to drive leasing, sponsorships, and event bookings.

## 🌟 Key Features

- **Cinematic Opening Sequence:** A 15-second immersive intro that establishes scale and ambition immediately.
- **Interactive & Non-Linear Navigation:** A vertical scroll-spy side navigation and tabbed interfaces allow the viewer (or presenter) to control the journey.
- **Performance Optimized:** Clean Next.js architecture prioritizing speed, leveraging optimized assets and lazy loading to target a 90+ Lighthouse score.
- **Responsive Design:** A premium, luxury-inspired dark UI that adapts flawlessly across desktop and tablet displays.
- **AI-Generated Assets:** Visuals crafted using advanced generative AI to represent the ultimate vision of the property where real assets were unavailable.

## 🚀 Setup & Installation

This project is built using Next.js (App Router), React, and Tailwind CSS.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/moa-interactive-deck.git
   cd moa-interactive-deck
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run Locally:**
   ```bash
   npm run dev
   ```
   Then navigate to `http://localhost:3000`

## 🌐 Deployment

The easiest way to deploy this Next.js app is to use the Vercel Platform.

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and configure the build settings.
4. Click Deploy. Your site will be live on a global CDN in minutes.

## 🌍 Live Demo

- Production URL: https://inter-deck.vercel.app

## 📸 Screenshots

![Mall of America Deck screenshot](public/assets/deck-screenshot.png)

![Mall of America Deck screenshot 2](public/assets/deck-screenshot-2.png)

## 📁 Project Structure

```
├── src/
│   ├── app/           # Next.js App Router (page.tsx, layout.tsx)
│   ├── components/    # Reusable React components
│   │   ├── cinematic/ # Hero video sections
│   │   ├── motion/    # Scroll reveals and counters
│   │   ├── sections/  # Core page content modules
│   │   └── ui/        # Floating CTA and generic grids
├── public/
│   └── assets/        # Static images and media
└── README.md          # Documentation
```

## 📈 Technical Requirements Addressed
- **Clean UI:** Minimalist chrome, high-contrast dark theme, modern typography (Outfit & Playfair Display).
- **Video-First Approach:** Support for ambient background video and motion elements.
- **Performance:** Component-based architecture, lazy loading, optimized Next.js Image/Video handling.
