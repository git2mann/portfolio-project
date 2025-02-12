// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = "Toggle Dark Mode";
darkModeToggle.classList.add("dark-mode-toggle");
document.body.appendChild(darkModeToggle);

// Load dark mode preference from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode and save preference
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
});

// Mobile menu toggle
const navLinks = document.querySelector(".nav-links");
const menuToggle = document.createElement("button");
menuToggle.innerText = "☰";
menuToggle.classList.add("menu-toggle");
document.querySelector("header nav").prepend(menuToggle);

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
