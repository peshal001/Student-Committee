const BLOGS_PATH = 'text/blogs.json';
const MAX_POST_PER_PAGE = 4;
let currentBlogPage = 0;
let blogCount;
let BLOGS;
let SEARCH_BLOGS = [];
let isSearch = false;

function fetchBlogs() {
    fetch(BLOGS_PATH)
        .then(response => {
            if (!response.ok) {
                throw new Error('Issue fetching data.');
            }
            return response.json();
        })
        .then(data => {
            BLOGS = data;
            blogCount = data.length;
            if (isSearch) {
                changePage(currentBlogPage, SEARCH_BLOGS);
            } else {
                changePage(currentBlogPage, BLOGS);
            }

            updatePaginationControls();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function changePage(cbp, dataToDisplay) {
    if (cbp < 0 || cbp >= Math.ceil(dataToDisplay.length / MAX_POST_PER_PAGE)) return;

    currentBlogPage = cbp;
    const postsContainer = document.querySelector('#posts-container');
    postsContainer.innerHTML = '';

    const startIndex = currentBlogPage * MAX_POST_PER_PAGE;
    const endIndex = Math.min(startIndex + MAX_POST_PER_PAGE, dataToDisplay.length);

    if (dataToDisplay.length === 0) {
        postsContainer.innerHTML = '<p>No blogs found.</p>';
    } else {
        for (let index = startIndex; index < endIndex; index++) {
            const post = dataToDisplay[index];
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                <a href='post.html?id=${post.id}'>
                    <img src="${post.image}" alt="${post.title}" />
                    <h3>${post.title}</h3>
                    <p>${post.summary}</p>
                </a>
            `;
            postsContainer.appendChild(postDiv);
        }
    }

    updatePaginationButtons(dataToDisplay);

    const newUrl = `blog.html?page=${currentBlogPage + 1}`;
    history.pushState({ page: currentBlogPage }, '', newUrl);
}

function updatePaginationButtons(dataToDisplay) {
    const totalPages = Math.ceil(dataToDisplay.length / MAX_POST_PER_PAGE);
    const prevButton = document.querySelector('#prev-blog-page');
    const nextButton = document.querySelector('#next-blog-page');
    const pagination = document.querySelector('#pagination-container');

    pagination.innerHTML = '';

    if (totalPages === 0) {
        // No pages to display, no need for pagination
        return;
    }

    const prevButtonElement = document.createElement('button');
    prevButtonElement.id = 'prev-blog-page';
    prevButtonElement.innerHTML = `&laquo; Previous`;
    prevButtonElement.disabled = currentBlogPage === 0;
    prevButtonElement.addEventListener('click', () => changePage(currentBlogPage - 1, dataToDisplay));
    pagination.appendChild(prevButtonElement);

    for (let i = 0; i < totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerHTML = `${i + 1}`;
        pageButton.classList.add('page-button', 'blog-page');
        pageButton.addEventListener('click', () => changePage(i, dataToDisplay));
        pagination.appendChild(pageButton);
    }

    const nextButtonElement = document.createElement('button');
    nextButtonElement.id = 'next-blog-page';
    nextButtonElement.innerHTML = `Next &raquo;`;
    nextButtonElement.disabled = currentBlogPage === totalPages - 1;
    nextButtonElement.addEventListener('click', () => changePage(currentBlogPage + 1, dataToDisplay));
    pagination.appendChild(nextButtonElement);
}

function searchBlogs() {
    const query = document.querySelector('#search-input').value.toLowerCase();
    if (query === '') {
        isSearch = false;
        SEARCH_BLOGS = [];
        changePage(currentBlogPage, BLOGS);
    } else {
        SEARCH_BLOGS = BLOGS.filter(post => post.title.toLowerCase().includes(query));
        isSearch = true;
        currentBlogPage = 0;
        changePage(currentBlogPage, SEARCH_BLOGS);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchBlogs();

    document.querySelector('#search-button').addEventListener('click', searchBlogs);

    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.page !== undefined) {
            currentBlogPage = event.state.page;
            changePage(currentBlogPage, isSearch ? SEARCH_BLOGS : BLOGS);
        }
    });
});
