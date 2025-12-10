// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Icons
const moonIcon = '<i data-feather="moon"></i>';
const sunIcon = '<i data-feather="sun"></i>';

// 1. Dark/Light Mode Logic
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.innerHTML = sunIcon;
    }
}

themeToggle.addEventListener('click', () => {
    let theme = body.getAttribute('data-theme');

    if (theme === 'light') {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = sunIcon;
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = moonIcon;
    }
    feather.replace();
});

// 2. Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 3. Sticky Navbar Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
