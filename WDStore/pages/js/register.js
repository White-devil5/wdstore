document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation
        if (username && email && password) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const existingUser = users.find(user => user.username === username || user.email === email);

            if (existingUser) {
                alert('User already exists with this username or email');
            } else {
                users.push({ username, email, password });
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('session', JSON.stringify({ username }));
                alert('Registration successful');
                window.location.href = '../index.html'; // Redirect to home page
            }
        } else {
            alert('Please fill in all fields');
        }
    });
});
