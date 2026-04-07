# Malaysian Salary Calculator 💰

A beautifully designed, real-time Malaysian salary calculator built specifically to handle non-standard shifts (e.g., 4 working days a week), Overtime structures, and standard statutory deductions.

## ✨ Features

- **Live Dynamic Calculation:** Enter your details and instantly view your gross and net salary breakdown.
- **Tailored Deductions:**
  - **EPF (11%)**: Accurately subjects only your Basic Salary and Night Shift Allowances to EPF (Overtime is ignored).
  - **SOCSO (0.5%) & EIS (0.2%)**: Dynamically applies to your entire gross payment (including OT and Allowances) correctly following Malaysian regulations.
- **Customizable Daily Rates:** Easily adjust your working "monthly divisor" (defaults to standard standard Malaysia 26, but adjustable for 4-day structural workers).
- **Beautiful UI:** Features out-of-the-box Glassmorphism, tailored dark mode, and sleek glow aesthetics making it feel like a premium native app.
- **Fully Responsive & PWA-ready:** View it on mobile and "Add to Home Screen" for a seamless app-like experience.

## 🚀 Getting Started

This application requires **Zero** setup. It's built iteratively over HTML, CSS, and Vanilla JavaScript. 

### Local Usage:
Simply double-click the `index.html` file to launch it directly in your web browser. 

### Web Hosting & Deployment (GitHub Pages)
If you want to host this publicly so you can access it on your phone:
1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a new repository on [GitHub](https://github.com/) and push your code.
3. Once pushed, navigate to your repository's **Settings > Pages**.
4. Change the source to `main` branch and click **Save**.
5. Your live calculator will be instantly available at `https://<your-username>.github.io/<repo-name>`!

## ⚙️ Built With
* [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (Vanilla)
* [Vanilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
