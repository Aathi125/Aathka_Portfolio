# 🚀 My Portfolio

A clean, modern developer portfolio built with React. Inspired by a minimal purple-gradient aesthetic with smooth scrolling, dark mode, and a fully responsive layout.

## ✨ Features

- **Single-page** with smooth scroll navigation
- **Dark / Light mode** toggle
- **Active section** highlight in navbar
- **5 sections**: Home · About · Projects · Experience · Contact
- **Responsive** — works on all screen sizes
- **Ready to deploy** on Vercel

---

## 🛠 Tech Stack

- React 18
- CSS3 (custom properties, animations)
- Google Fonts (Syne + DM Sans)
- No external UI libraries — pure CSS

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Build for production
```bash
npm run build
```

---

## ✏️ Customization

### Personal Info
Edit these files to replace placeholder content with your own:

| File | What to change |
|------|---------------|
| `src/sections/Home.js` | Name, title, bio, social links |
| `src/sections/About.js` | About text, stats, skills list |
| `src/sections/Projects.js` | Project cards (title, desc, tags, links) |
| `src/sections/Experience.js` | Work experience + education entries |
| `src/sections/Contact.js` | Email address, contact links |
| `src/components/Navbar.js` | Logo name |
| `src/components/Footer.js` | Name, links |

### Adding a Real Profile Photo
In `src/sections/Home.js`, replace the `avatar-placeholder` div with:
```jsx
<img src="/photo.jpg" alt="Your Name" />
```
Then place your photo in the `public/` folder.

### Contact Form
The contact form uses a simulated submit by default. To make it work, sign up at [Formspree](https://formspree.io):

1. Create a free account and get your form endpoint
2. In `src/sections/Contact.js`, replace the `submit` function:
```js
const submit = async (e) => {
  e.preventDefault();
  setLoading(true);
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  setSent(true);
  setLoading(false);
};
```

### Resume Link
Place your resume PDF in the `public/` folder as `resume.pdf`.  
The "Download Resume" button in About already links to `/resume.pdf`.

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI (recommended)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Vercel auto-detects React and deploys.

### Option B — GitHub + Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Leave build settings as default (Vercel detects CRA automatically)
5. Click **Deploy** — done! 🎉

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── (your photo.jpg, resume.pdf go here)
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   └── Footer.js / Footer.css
│   ├── sections/
│   │   ├── Home.js / Home.css
│   │   ├── About.js / About.css
│   │   ├── Projects.js / Projects.css
│   │   ├── Experience.js / Experience.css
│   │   └── Contact.js / Contact.css
│   ├── App.js
│   ├── index.js
│   └── index.css       ← global tokens & animations
├── package.json
├── vercel.json
└── README.md
```

---

## 🎨 Color Customization

All colors are CSS variables in `src/index.css`. Edit `:root` to change the theme:
```css
:root {
  --purple: #6B21E8;   /* primary accent */
  --blue:   #3B82F6;   /* gradient end   */
  --pink:   #EC4899;   /* blob accent     */
}
```

---

Made with ❤️ using React
