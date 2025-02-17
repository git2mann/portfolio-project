// script.js
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = darkModeToggle.querySelector("i");
const scrollToTopButton = document.getElementById("scroll-to-top");

// Dark Mode Toggle
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.classList.add("fa-sun");
    } else {
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");
    }
});

// Scroll to Top Button
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

// Typewriter Effect
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

// Load Projects
const projects = [
    {
        title: "Project 1",
        description: "A brief description of Project 1.",
        image: "project1.jpg",
        link: "#"
    },
    {
        title: "Project 2",
        description: "A brief description of Project 2.",
        image: "project2.jpg",
        link: "#"
    },
    {
        title: "Project 3",
        description: "A brief description of Project 3.",
        image: "project3.jpg",
        link: "#"
    }
];

const projectsGrid = document.querySelector(".projects-grid");

function loadProjects() {
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project");

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// On Load
window.onload = () => {
    typeWriter();
    loadProjects();
    document.getElementById("year").textContent = new Date().getFullYear();
};
