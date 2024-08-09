// Utility function to get an element by ID
const $ = (id) => document.getElementById(id);

// Function to determine BMI category based on BMI value
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
    // Store logged-in status in localStorage and redirect to the dashboard
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
};

const logoutUser = () => {
    // Remove logged-in status from localStorage and redirect to the login page
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
};

// Email validation using regex to check for proper email format
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

// Handle Signup Form Submission
$('signupForm')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve user input values and trim whitespace
    const fullName = $('fullName').value.trim();
    const email = $('email').value.trim();
    const password = $('password').value;
    const confirmPassword = $('confirmPassword').value;

    // Validate password match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Validate email format
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Log the form data to console (for debugging) and log in the user
    console.log('Form Submitted:', { fullName, email, password });
    loginUser(); // Log the user in after successful signup
    $('signupForm').reset(); // Clear the form fields
    alert('Signup successful! You can now log in.');
});

// Handle Login Form Submission
$('loginForm')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve user input values
    const email = $('email').value.trim();
    const password = $('password').value;

    // Check if both fields are filled
    if (!email || !password) {
        alert('Please fill out all fields');
        return;
    }

    // Log the login attempt to console (for debugging) and log in the user
    console.log('Login attempt:', { email, password });
    alert('Login successful! Redirecting to your dashboard...');
    loginUser(); // Redirect to the dashboard after successful login
});

// On dashboard.html, check if user is logged in
if (window.location.pathname.endsWith('dashboard.html') && !isLoggedIn()) {
    alert('Please log in first.'); // Alert the user if not logged in
    window.location.href = 'login.html'; // Redirect to the login page
}

// Logout button functionality
$('logoutButton')?.addEventListener('click', logoutUser);

// Handle Activity Form Submission
$('activityForm')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve user input values
    const activityType = $('activityType').value.trim();
    const activityDuration = $('activityDuration').value;
    const activityDate = $('activityDate').value;

    // Check if all fields are filled
    if (!activityType || !activityDuration || !activityDate) {
        alert('Please fill out all fields');
        return;
    }

    // Retrieve existing activities from localStorage or initialize as empty array
    let activities = JSON.parse(localStorage.getItem('activities')) || [];
    // Calculate calories burned based on activity type and duration
    const caloriesBurned = calculateCalories(activityType, activityDuration);
    // Add the new activity to the activities array
    activities.push({ type: activityType, duration: activityDuration, date: activityDate, calories: caloriesBurned });
    // Save updated activities array back to localStorage
    localStorage.setItem('activities', JSON.stringify(activities));

    window.location.href = 'dashboard.html'; // Redirect to the dashboard after logging activity
});

// Function to calculate calories burned based on activity type and duration
function calculateCalories(activityType, duration) {
    // This is a basic example and should be replaced with a more accurate calculation
    const MET = {
        "Running": 10, // MET value for running
        "Walking": 3.5, // MET value for walking
        "Cycling": 8, // MET value for cycling
        "Yoga": 3 // MET value for yoga
    };
    
    const weight = 70; // Average weight in kg, replace with user data if available
    const metValue = MET[activityType] || 5; // Default MET value
    // Calculate calories burned using MET formula
    return (metValue * 3.5 * weight / 200) * duration; 
}

// BMI Calculator Form Submission
$('bmiForm')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve and parse user input for height and weight
    const height = parseFloat($('height').value) / 100;
    const weight = parseFloat($('weight').value);

    // Check if both fields are filled
    if (!height || !weight) {
        alert('Please fill out all fields');
        return;
    }

    // Calculate BMI and determine BMI category
    const bmi = (weight / (height * height)).toFixed(2);
    const bmiCategory = getBMICategory(bmi);

    // Display BMI result and category on the page
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

    // Loop through activities and display each one in a list
    activities.forEach(activity => {
        const listItem = document.createElement('li');
        listItem.textContent = `${activity.type} - ${activity.duration} minutes on ${activity.date}`;
        activityList.appendChild(listItem);
        totalCalories += activity.calories || 0;
    });

    // Display total calories burned on the page
    $('calories-burned').textContent = `${totalCalories.toFixed(0)} kcal`;

    // Retrieve and display BMI and category from localStorage
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
        type: 'line', // Chart type is set to line chart
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Labels for x-axis
            datasets: [{
                label: 'Minutes of Activity',
                data: [30, 45, 60, 50, 70, 40, 60], // Sample data for activity duration
                backgroundColor: 'rgba(0, 123, 255, 0.2)', // Transparent blue fill for the chart area
                borderColor: 'rgba(0, 123, 255, 1)', // Blue color for the line
                borderWidth: 2 // Width of the line
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Ensure y-axis starts at zero
                }
            }
        }
    });
}
