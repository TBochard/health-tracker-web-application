// scripts.js

// Utility function to get an element by ID
const $ = (id) => document.getElementById(id);

// Mock session handling using localStorage
const isLoggedIn = () => localStorage.getItem('loggedIn') === 'true';

const loginUser = () => {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
};

const logoutUser = () => {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
};

// Email validation using regex
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

// Handle Signup Form Submission
$('signupForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullName = $('fullName').value.trim();
    const email = $('email').value.trim();
    const password = $('password').value;
    const confirmPassword = $('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Assuming basic validation passed, proceed with form submission
    console.log('Form Submitted:', { fullName, email, password });

    // Simulate user login after successful signup
    loginUser();

    // Clear the form
    $('signupForm').reset();

    alert('Signup successful! You can now log in.');
});

// Handle Login Form Submission
$('loginForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = $('email').value.trim();
    const password = $('password').value;

    if (!email || !password) {
        alert('Please fill out all fields');
        return;
    }

    // Simulate a login process
    console.log('Login attempt:', { email, password });

    alert('Login successful! Redirecting to your dashboard...');
    loginUser();
});

// On dashboard.html, check if user is logged in
if (window.location.pathname.endsWith('dashboard.html') && !isLoggedIn()) {
    alert('Please log in first.');
    window.location.href = 'login.html';
}

// Logout button functionality
$('logoutButton')?.addEventListener('click', logoutUser);

// Handle Activity Form Submission
$('activityForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const activityType = $('activityType').value.trim();
    const activityDuration = $('activityDuration').value;
    const activityDate = $('activityDate').value;

    if (!activityType || !activityDuration || !activityDate) {
        alert('Please fill out all fields');
        return;
    }

    // Add the activity to the recent activities list
    const activityList = $('activity-list');
    const newActivity = document.createElement('li');
    newActivity.textContent = `${activityType} - ${activityDuration} minutes on ${activityDate}`;
    activityList.appendChild(newActivity);

    // Clear the form
    $('activityForm').reset();
});

// Initialize Chart.js and render the chart
const ctx = $('activityChart')?.getContext('2d');
if (ctx) {
    const activityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Minutes of Activity',
                data: [30, 45, 60, 50, 70, 40, 60],
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
