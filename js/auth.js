document.addEventListener('DOMContentLoaded', () => {
    const users = {
        admin: { username: 'admin', password: 'adminpass' }
    };

    function handleLogin(event, role) {
        event.preventDefault();
        const username = document.getElementById(`${role}-username`).value;
        const password = document.getElementById(`${role}-password`).value;

        if (username === users[role].username && password === users[role].password) {
            localStorage.setItem('userRole', role);
            window.location.href = `${role}-dashboard.html`;
        } else {
            alert('Invalid username or password');
        }
    }

    const adminLoginForm = document.getElementById('admin-login-form');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (event) => handleLogin(event, 'admin'));
    }
});
