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

<div class="post-card">
    <h3>Post Title</h3>
    <p class="post-date">Posted on <span class="date"></span></p>
    <p class="post-content">This is a placeholder text for your blog post content.</p>
</div>

// Initialize an empty array for blog posts
let blogPosts = [
    {
        title: "My First Blog Post",
        content: "This is the content of my very first blog post. Welcome to my blog!",
        date: new Date().toLocaleDateString(),
    },
    {
        title: "Exploring Web Development",
        content: "Web development is a broad field, ranging from front-end to back-end technologies. Let's dive deeper into it.",
        date: new Date().toLocaleDateString(),
    },
];

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
        postDate.innerHTML = `Posted on <span class="date">${post.date}</span>`;
        postCard.appendChild(postDate);

        const postContent = document.createElement("p");
        postContent.classList.add("post-content");
        postContent.innerText = post.content;
        postCard.appendChild(postContent);

        blogContainer.appendChild(postCard);
    });
}

// Function to add a new blog post
function addNewPost() {
    // Simulating adding a post (you can create a form for real dynamic input)
    const newPost = {
        title: "New Blog Post",
        content: "This is a new blog post added dynamically.",
        date: new Date().toLocaleDateString(),
    };

    blogPosts.push(newPost);
    displayBlogPosts(); // Re-render posts
}

// Event listener to add a new post when the button is clicked
document.getElementById("add-post-btn").addEventListener("click", addNewPost);

// Display blog posts when the page loads
window.onload = displayBlogPosts;

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
