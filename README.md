# Mall of America — Interactive Partner Deck

An immersive, cinematic, and interactive sales tool designed for Mall of America. This platform replaces traditional static slide decks with a dynamic, non-linear storytelling experience built to drive leasing, sponsorships, and event bookings.

## 🌟 Key Features

- **Cinematic Opening Sequence:** A 15-second immersive intro that establishes scale and ambition immediately.
- **Interactive & Non-Linear Navigation:** A vertical scroll-spy side navigation and tabbed interfaces allow the viewer (or presenter) to control the journey.
- **Performance Optimized:** Clean architecture prioritizing speed, leveraging optimized assets and lazy loading to target a 90+ Lighthouse score.
- **Responsive Design:** A premium, luxury-inspired dark UI that adapts flawlessly across desktop and tablet displays.
- **AI-Generated Assets:** Visuals crafted using advanced generative AI to represent the ultimate vision of the property where real assets were unavailable.

## 🚀 Setup & Installation

This project is built using vanilla HTML, CSS, and JavaScript. No build step or package manager is required for the core experience.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/moa-interactive-deck.git
   cd moa-interactive-deck
   ```

2. **Run Locally:**
   Simply open `index.html` in any modern web browser, or serve it using a local development server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`

## 🌐 Deployment

The project is ready to be deployed immediately via any static hosting provider.

**To deploy to GitHub Pages:**
1. Push the code to a GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and the `/` (root) folder.
5. Click **Save**. Your site will be live in a few minutes.

**To deploy to Vercel or Netlify:**
1. Connect your GitHub repository to the platform.
2. Leave the build command empty (since it's static).
3. Set the publish directory to the root (`./`).
4. Deploy!

## 📁 Project Structure

```
├── index.html       # Core markup and content structure
├── style.css        # Animations, layouts, and responsive luxury UI
├── script.js        # Cinematic sequence logic and interactive modals
├── hero.png         # Generated asset: Aerial Night View
├── retail.png       # Generated asset: Luxury Corridor
├── events.png       # Generated asset: Concert Arena
└── README.md        # Documentation
```

## 📈 Technical Requirements Addressed
- **Clean UI:** Minimalist chrome, high-contrast dark theme, modern typography (Outfit & Playfair Display).
- **Video-First Approach:** Support for ambient background video and motion elements.
- **Performance:** Separated concerns (HTML/CSS/JS), deferred loading of non-critical elements, and optimized DOM manipulation.
