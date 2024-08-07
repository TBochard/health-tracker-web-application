// scripts.js

// Mock session handling using localStorage
function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

function loginUser() {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
}

function logoutUser() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Handle Signup Form Submission
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

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

    // Simulate user login after successful signup
    loginUser();

    // Clear the form
    document.getElementById('signupForm').reset();

    alert('Signup successful! You can now log in.');
});

// Handle Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
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
    loginUser();
});

// On dashboard.html, check if user is logged in
if (window.location.pathname.endsWith('dashboard.html') && !isLoggedIn()) {
    alert('Please log in first.');
    window.location.href = 'login.html';
}

// Logout button functionality
document.getElementById('logoutButton')?.addEventListener('click', logoutUser);

// Handle Activity Form Submission
document.getElementById('activityForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const activityType = document.getElementById('activityType').value.trim();
    const activityDuration = document.getElementById('activityDuration').value;
    const activityDate = document.getElementById('activityDate').value;

    if (activityType === "" || activityDuration === "" || activityDate === "") {
        alert('Please fill out all fields');
        return;
    }

    // Add the activity to the recent activities list
    const activityList = document.getElementById('activity-list');
    const newActivity = document.createElement('li');
    newActivity.textContent = `${activityType} - ${activityDuration} minutes on ${activityDate}`;
    activityList.appendChild(newActivity);

    // Clear the form
    document.getElementById('activityForm').reset();
});

// Initialize Chart.js and render the chart
const ctx = document.getElementById('activityChart')?.getContext('2d');
if (ctx) {
    const activityChart = new Chart(ctx, {
        type: 'line', // Example chart type
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
