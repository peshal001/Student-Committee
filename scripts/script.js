// JavaScript to handle carousel slide movement
let slideIndex = 0;
let autoScrollTimeout;

document.addEventListener('DOMContentLoaded', () => {
    // Initial call to show slides
    showSlides(slideIndex);

    // Display current date
    displayCurrentDate();

    // Setup login form functionality
    setupLoginForms();

    // Role-based access control
    handleRoleBasedAccess();
});

function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-slide");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Update slideIndex
    slideIndex = (n + slides.length) % slides.length;

    // Show the current slide
    slides[slideIndex].style.display = "block";

    // Reset automatic scrolling
    clearTimeout(autoScrollTimeout);
    autoScrollTimeout = setTimeout(() => showSlides(slideIndex + 1), 4000); // Change slide every 4 seconds
}

function moveSlide(n) {
    showSlides(slideIndex + n);
}

function displayCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        dateElement.textContent = today.toLocaleDateString('en-US', options);
    }
}

function setupLoginForms() {
    const studentLoginForm = document.getElementById('student-login-form');
    const teacherLoginForm = document.getElementById('teacher-login-form');
    const adminLoginForm = document.getElementById('admin-login-form');

    if (studentLoginForm) {
        studentLoginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.setItem('userRole', 'student');
            window.location.href = 'student-dashboard.html';
        });
    }

    if (teacherLoginForm) {
        teacherLoginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.setItem('userRole', 'teacher');
            window.location.href = 'teacher-dashboard.html';
        });
    }

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.setItem('userRole', 'admin');
            window.location.href = 'admin-dashboard.html';
        });
    }
}

function handleRoleBasedAccess() {
    const userRole = localStorage.getItem('userRole');
    const allowedRoles = document.body.getAttribute('data-allowed-roles');

    if (allowedRoles && userRole && !allowedRoles.split(',').includes(userRole)) {
        alert('You do not have access to this page.');
        window.location.href = 'index.html';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate form submission
    const membershipForm = document.getElementById('membership-form');
    if (membershipForm) {
        membershipForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(membershipForm);
            const name = formData.get('name');

            alert(`Thank you, ${name}, for applying for membership!`);
            membershipForm.reset();
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamically load recent posts (mockup example)
    const recentPosts = document.querySelector('.recent-posts');
    const posts = [
        { title: 'Dynamic Post 1', link: 'dynamic_post1.html' },
        { title: 'Dynamic Post 2', link: 'dynamic_post2.html' },
        { title: 'Dynamic Post 3', link: 'dynamic_post3.html' },
    ];

    posts.forEach(post => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = post.link;
        a.textContent = post.title;
        li.appendChild(a);
        recentPosts.appendChild(li);
    });
});


// Blog posts data
const blogPosts = [
    { title: "Post Title 1", summary: "Summary of post 1...", image: "images/post1.jpg", link: "post1.html" },
    { title: "Post Title 2", summary: "Summary of post 2...", image: "images/post2.jpg", link: "post2.html" },
    { title: "Post Title 3", summary: "Summary of post 3...", image: "images/post3.jpg", link: "post3.html" },
    { title: "Post Title 4", summary: "Summary of post 4...", image: "images/post4.jpg", link: "post4.html" },
    { title: "Post Title 5", summary: "Summary of post 5...", image: "images/post5.jpg", link: "post5.html" },
    { title: "Post Title 6", summary: "Summary of post 6...", image: "images/post6.jpg", link: "post6.html" },
    { title: "Post Title 7", summary: "Summary of post 7...", image: "images/post7.jpg", link: "post7.html" },
    { title: "Post Title 8", summary: "Summary of post 8...", image: "images/post8.jpg", link: "post8.html" },
    { title: "Post Title 9", summary: "Summary of post 9...", image: "images/post9.jpg", link: "post9.html" }
];

const postsPerPage = 3;
let currentPage = 1;

// Function to render posts
function renderPosts(page) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = blogPosts.slice(start, end);

    paginatedPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <a href="${post.link}">
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
            </a>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Function to handle pagination
function handlePagination(event) {
    const page = event.target.id.replace('page', '');

    if (!isNaN(page)) {
        currentPage = parseInt(page);
        renderPosts(currentPage);
        updatePagination();
    } else if (event.target.id === 'prev') {
        if (currentPage > 1) {
            currentPage--;
            renderPosts(currentPage);
            updatePagination();
        }
    } else if (event.target.id === 'next') {
        if (currentPage < Math.ceil(blogPosts.length / postsPerPage)) {
            currentPage++;
            renderPosts(currentPage);
            updatePagination();
        }
    }
}

// Function to update pagination buttons
function updatePagination() {
    const paginationLinks = document.querySelectorAll('.pagination a');

    paginationLinks.forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(`page${currentPage}`).classList.add('active');
}

// Search functionality
function searchPosts() {
    const query = document.getElementById('search').value.toLowerCase();
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query)
    );

    filteredPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <a href="${post.link}">
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
            </a>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderPosts(currentPage);
    updatePagination();

    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => {
        link.addEventListener('click', handlePagination);
    });
});






// JavaScript to handle modals
function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
