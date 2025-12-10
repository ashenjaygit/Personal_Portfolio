# AI/ML Portfolio - Ashen Jayarathne

![Portfolio Preview](assets/profile.jpg)

A modern, fully responsive personal portfolio website designed for an aspiring AI/ML Engineer. Built with pure HTML5, CSS3, and JavaScript, ensuring high performance with no build steps or bulky frameworks required.

**Live Demo**: [View Live](https://ashenjaygit.github.io/Personal_Portfolio) (*Enable GitHub Pages to view*)

## 🚀 Features

-   **Dynamic GitHub Projects**: Automatically fetches your public repositories from GitHub API.
    -   *Filter by Stars*: Only shows repositories with stars.
    -   *Exclusion List*: Easily hide specific repositories.
-   **Dark/Light Mode**: Smooth theme toggling with persistent state.

-   **Responsive Design**: Optimized for Desktop, Tablet, and Mobile devices.
-   **Modern UI**: Glassmorphism effects, typing animations, and clean typography.
-   **Contact Form**: Integrated with Formspree for handling emails.

## 🛠️ Tech Stack

-   **HTML5** - Semantic structure.
-   **CSS3** - Custom variables, Flexbox/Grid, and responsive media queries.
-   **JavaScript (ES6+)** - Async API fetching, DOM manipulation, and logic.
-   **Feather Icons** - Lightweight, clean SVG icons.

## ⚙️ Configuration & Updates

### 1. Filtering GitHub Projects
To exclude specific repositories or change the filtering logic, edit `js/github-api.js`:

```javascript
// Add repository names to this list to hide them
const excludedRepos = [
    'repo-to-hide',
    'another-repo'
];

// Current filter: Not Forked + Not Excluded + Has Stars
```



### 3. Contact Form Setup
1.  Go to [Formspree](https://formspree.io/).
2.  Create a new form and get the endpoint URL.
3.  Update the `action` attribute in `index.html`:
    ```html
    <form action="https://formspree.io/f/YOUR_NEW_ID" method="POST">
    ```

## 📦 Deployment

This project is static and can be hosted anywhere (GitHub Pages, Netlify, Vercel).

**GitHub Pages Steps:**
1.  Go to Repository **Settings** > **Pages**.
2.  Select `main` branch and `/ (root)` folder.
3.  Click **Save**.

## 👤 Author

**Ashen Jayarathne**
-   GitHub: [@ashenjaygit](https://github.com/ashenjaygit)
-   LinkedIn: [Ashen Jayarathne](https://www.linkedin.com/in/ashen-jayarathne-605b35272)

---
*Built with ❤️ and Code.*
