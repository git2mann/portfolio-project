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

// Initialize blog posts with content
const blogPosts = [
    {
        title: "The Journey of a Web Developer",
        content: "Starting my journey as a web developer has been both challenging and rewarding. From learning the basics of HTML and CSS to diving deep into JavaScript frameworks, every step has taught me something valuable. Here's what I've learned along the way...",
        date: "2023-12-15"
    },
    {
        title: "UI/UX Design Principles Every Developer Should Know",
        content: "As developers, we often focus on functionality, but understanding UI/UX principles is crucial. Here are five essential design principles that have helped me create better user experiences: 1. Keep it simple 2. Maintain consistency 3. Provide feedback 4. Make it accessible 5. Focus on user needs.",
        date: "2023-12-20"
    },
    {
        title: "Building Responsive Websites: Best Practices",
        content: "In today's mobile-first world, creating responsive websites is more important than ever. Here are some key practices I follow: using flexible grids, implementing responsive images, testing across devices, and employing CSS media queries effectively.",
        date: "2024-01-05"
    },
    {
        title: "The Power of JavaScript ES6+",
        content: "Modern JavaScript has transformed how we write code. Features like arrow functions, destructuring, async/await, and modules have made our code more readable and maintainable. Let's explore some practical examples of these features in action.",
        date: "2024-01-15"
    },
    {
        title: "My Creative Process in Web Development",
        content: "Every project starts with understanding the client's needs and sketching out ideas. I believe in prototyping early, getting feedback often, and iterating quickly. This approach has helped me deliver better results and maintain strong client relationships.",
        date: "2024-01-25"
    }
];

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to display blog posts
function displayBlogPosts() {
    const blogContainer = document.getElementById("blog-posts");
    blogContainer.innerHTML = ""; // Clear any existing content

    blogPosts.forEach((post) => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");

        const postTitle = document.createElement("h3");
        postTitle.innerText = post.title;
        postCard.appendChild(postTitle);

        const postDate = document.createElement("p");
        postDate.classList.add("post-date");
        postDate.innerHTML = `Posted on <span class="date">${formatDate(post.date)}</span>`;
        postCard.appendChild(postDate);

        const postContent = document.createElement("p");
        postContent.classList.add("post-content");
        postContent.innerText = post.content;
        postCard.appendChild(postContent);

        blogContainer.appendChild(postCard);
    });
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
    displayBlogPosts();
    document.getElementById("year").textContent = new Date().getFullYear();
};
