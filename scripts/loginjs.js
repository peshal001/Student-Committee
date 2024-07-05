document.getElementById('admin-login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Fetch credentials from a text file (credentials.txt)
    try {
        const response = await fetch('credentials.txt');
        const text = await response.text();
        const credentials = text.split('\n').map(line => line.split(':'));
        const validCredentials = credentials.find(cred => cred[0] === username && cred[1] === password);

        if (validCredentials) {
            // Successful login
            alert('Login successful! Redirecting to admin panel...');
            // Add your redirection logic here
        } else {
            // Invalid credentials
            alert('Invalid username or password. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching credentials:', error);
    }
});
