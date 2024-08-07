// scripts.js

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
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
