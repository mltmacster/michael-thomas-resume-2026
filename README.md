# Michael L. Thomas - Professional Resume Website (2026 Edition)

![Project Banner](client/public/images/hero-glassmorphism.png)

A modern, high-performance resume website built to showcase the professional experience, skills, and certifications of Michael L. Thomas. This project features three distinct, switchable design systems that reflect different aspects of IT and Cybersecurity.

## 🎨 Design Systems

This project implements a unique **Theme Switcher** that completely transforms the UI/UX, typography, and layout:

1.  **Glassmorphism (Future-Corporate)**
    *   *Concept:* Represents Cloud Computing & Security.
    *   *Visuals:* Dark mode, frosted glass effects, deep navy gradients, glowing accents.
    *   *Font:* DM Sans + Outfit.

2.  **Neo-Brutalism (Tech-Industrial)**
    *   *Concept:* Represents the "Under the Hood" nature of IT infrastructure.
    *   *Visuals:* High contrast, raw borders, hard shadows, monospaced typography, glitch effects.
    *   *Font:* Public Sans + JetBrains Mono.

3.  **Swiss Style (Modernized)**
    *   *Concept:* Represents Precision, Organization, and Professionalism.
    *   *Visuals:* Clean grid systems, massive typography, ample whitespace, structured layouts.
    *   *Font:* Inter + Helvetica Now.

## 🚀 Features

*   **Dynamic Theme Switching:** Instantly toggle between design styles without reloading.
*   **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens.
*   **PDF Generation:** Auto-generated PDF resume available for download.
*   **Consolidated Data:** Centralized `resume-data.ts` file for easy updates to experience and skills.
*   **Interactive Elements:** Hover effects, smooth scrolling, and animations using Framer Motion.

## 🛠️ Tech Stack

*   **Framework:** [React 19](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Language:** TypeScript

## 📦 Installation & Setup

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mltmacster/michael-thomas-resume-2026.git
    cd michael-thomas-resume-2026
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Start the development server:**
    ```bash
    pnpm dev
    ```

4.  **Build for production:**
    ```bash
    pnpm build
    ```

## 📂 Project Structure

```
michael-thomas-resume/
├── client/
│   ├── public/             # Static assets (images, PDF)
│   ├── src/
│   │   ├── components/     # Reusable UI components (Hero, ExperienceCard, etc.)
│   │   ├── contexts/       # ThemeContext for state management
│   │   ├── lib/            # Utilities and resume-data.ts source of truth
│   │   ├── pages/          # Main page views
│   │   └── index.css       # Global styles and Tailwind theme configuration
├── server/                 # Server entry point (for production serving)
└── package.json            # Project dependencies and scripts
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
*Built with precision by D3V GURUs for Michael L. Thomas.*
