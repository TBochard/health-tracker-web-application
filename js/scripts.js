// Utility function to get an element by ID
const $ = (id) => document.getElementById(id);

// Function to determine BMI category
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

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

    console.log('Form Submitted:', { fullName, email, password });
    loginUser();
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

    let activities = JSON.parse(localStorage.getItem('activities')) || [];
    const caloriesBurned = calculateCalories(activityType, activityDuration);
    activities.push({ type: activityType, duration: activityDuration, date: activityDate, calories: caloriesBurned });
    localStorage.setItem('activities', JSON.stringify(activities));

    window.location.href = 'dashboard.html';
});

// Function to calculate calories burned based on activity type and duration
function calculateCalories(activityType, duration) {
    // This is a very basic example and should be replaced with a proper calculation
    const MET = {
        "Running": 10, // MET value for running
        "Walking": 3.5, // MET value for walking
        "Cycling": 8, // MET value for cycling
        "Yoga": 3 // MET value for yoga
    };
    
    const weight = 70; // Average weight in kg, replace with user data if available
    const metValue = MET[activityType] || 5; // Default MET value
    return (metValue * 3.5 * weight / 200) * duration; // Calories burned formula
}

// BMI Calculator Form Submission
$('bmiForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseFloat($('height').value) / 100;
    const weight = parseFloat($('weight').value);

    if (!height || !weight) {
        alert('Please fill out all fields');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    const bmiCategory = getBMICategory(bmi);

    $('bmiResult').textContent = `Your BMI is ${bmi} (${bmiCategory})`;

    // Store BMI and category in localStorage
    localStorage.setItem('bmi', bmi);
    localStorage.setItem('bmiCategory', bmiCategory);
});

// On dashboard.html, load activities and BMI
if (window.location.pathname.endsWith('dashboard.html')) {
    const activities = JSON.parse(localStorage.getItem('activities')) || [];
    const activityList = $('activity-list');
    let totalCalories = 0;

    activities.forEach(activity => {
        const listItem = document.createElement('li');
        listItem.textContent = `${activity.type} - ${activity.duration} minutes on ${activity.date}`;
        activityList.appendChild(listItem);
        totalCalories += activity.calories || 0;
    });

    $('calories-burned').textContent = `${totalCalories.toFixed(0)} kcal`;

    // Retrieve and display BMI and category
    const storedBmi = localStorage.getItem('bmi');
    const bmiCategory = localStorage.getItem('bmiCategory');
    if (storedBmi && bmiCategory) {
        $('bmi-display').textContent = `${storedBmi} (${bmiCategory})`;
    } else {
        $('bmi-display').textContent = '-';
    }
}

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
