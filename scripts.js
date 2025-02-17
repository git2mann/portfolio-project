// Toggle Dark Mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Scroll to Top Button Visibility
const scrollToTopButton = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "flex";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typewriter Effect for Hero Section
const typewriterText = "Creative Developer & Designer";
let index = 0;
const typewriterElement = document.querySelector(".typewriter");

function typeWriter() {
    if (index < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;
