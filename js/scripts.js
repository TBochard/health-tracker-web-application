document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Assuming basic validation passed, proceed with form submission
    console.log('Form Submitted:', {
        fullName,
        email,
        password
    });

    // Clear the form
    document.getElementById('signupForm').reset();

    alert('Signup successful! You can now log in.');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert('Please fill out all fields');
        return;
    }

    // Simulate a login process
    console.log('Login attempt:', { email, password });

    alert('Login successful! Redirecting to your dashboard...');
    window.location.href = 'dashboard.html';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
