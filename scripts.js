// script.js
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add Project Data (replace with your actual project data)
const projects = [
    {
        image: "placeholder-project1.jpg",
        title: "Project Title 1",
        description: "Short description of project 1.",
        link: "#"
    },
    {
        image: "placeholder-project2.jpg",
        title: "Project Title 2",
        description: "Short description of project 2.",
        link: "#"
    },
    // Add more projects here...
];

const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}">View Project</a>
    `;
    projectsGrid.appendChild(projectDiv);
});
