// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙 Dark Mode';
darkModeToggle.id = 'dark-mode-toggle';
document.body.appendChild(darkModeToggle);

darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '10px';
darkModeToggle.style.right = '10px';
darkModeToggle.style.padding = '10px 15px';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.background = '#333';
darkModeToggle.style.color = '#fff';
darkModeToggle.style.fontSize = '1rem';

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

// Load user preference for dark mode
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ Light Mode';
}

// Mobile Menu Toggle
const menuToggle = document.createElement('button');
menuToggle.id = 'menu-toggle';
menuToggle.innerHTML = '☰';
document.querySelector('header').appendChild(menuToggle);

menuToggle.style.position = 'absolute';
menuToggle.style.top = '1rem';
menuToggle.style.right = '1rem';
menuToggle.style.fontSize = '1.5rem';
menuToggle.style.color = 'white';
menuToggle.style.background = 'none';
menuToggle.style.border = 'none';
menuToggle.style.cursor = 'pointer';

const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});