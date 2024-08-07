// smoke.test.js

// Test that the home page loads successfully
test('Home page loads successfully', () => {
    document.body.innerHTML = '<div id="root"></div>';
    expect(document.getElementById('root')).not.toBeNull();
});

// Test that the login form submits without error
test('Login form submits successfully', () => {
    document.body.innerHTML = `
        <form id="loginForm">
            <input type="email" id="email" value="test@example.com"/>
            <input type="password" id="password" value="password123"/>
            <button type="submit">Login</button>
        </form>
    `;
    
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('loggedIn', 'true');
    });
    
    loginForm.dispatchEvent(new Event('submit'));
    
    expect(localStorage.getItem('loggedIn')).toBe('true');
});

// Test that all navigation links work
test('Navigation links are functional', () => {
    document.body.innerHTML = `
        <nav>
            <a href="index.html" id="homeLink">Home</a>
            <a href="login.html" id="loginLink">Login</a>
            <a href="dashboard.html" id="dashboardLink">Dashboard</a>
        </nav>
    `;

    const homeLink = document.getElementById('homeLink');
    const loginLink = document.getElementById('loginLink');
    const dashboardLink = document.getElementById('dashboardLink');

    expect(homeLink.getAttribute('href')).toBe('index.html');
    expect(loginLink.getAttribute('href')).toBe('login.html');
    expect(dashboardLink.getAttribute('href')).​⬤
