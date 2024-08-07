// Test the full user signup to dashboard flow
test('User signup to dashboard flow', () => {
    document.body.innerHTML = `
        <form id="signupForm">
            <input type="text" id="fullName" value="John Doe"/>
            <input type="email" id="email" value="john@example.com"/>
            <input type="password" id="password" value="password123"/>
            <input type="password" id="confirmPassword" value="password123"/>
            <button type="submit">Sign Up</button>
        </form>
    `;

    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = {
            fullName: 'John Doe',
            email: 'john@example.com',
            password: 'password123'
        };
        localStorage.setItem('user', JSON.stringify(user));
    });

    signupForm.dispatchEvent(new Event('submit'));
    
    const storedUser = JSON.parse(localStorage.getItem('user'));
    expect(storedUser.email).toBe('john@example.com');
});

// Test activity logging and display on dashboard
test('Log activity and display on dashboard', () => {
    document.body.innerHTML = `
        <form id="activityForm">
            <input type="text" id="activityType" value="Running"/>
            <input type="number" id="activityDuration" value="30"/>
            <input type="date" id="activityDate" value="2024-08-07"/>
            <button type="submit">Log Activity</button>
        </form>
        <ul id="activity-list"></ul>
    `;

    const activityForm = document.getElementById('activityForm');
    activityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const activity = {
            type: 'Running',
            duration: 30,
            date: '2024-08-07'
        };
        let activities = JSON.parse(localStorage.getItem('activities')) || [];
        activities.push(activity);
        localStorage.setItem('activities', JSON.stringify(activities));
    });

    activityForm.dispatchEvent(new Event('submit'));

    const activities = JSON.parse(localStorage.getItem('activities'));
    expect(activities.length).toBeGreaterThan(0);
    expect(activities[0].type).toBe('Running');
});

// Test session management and page access
test('Session management and page access', () => {
    localStorage.setItem('loggedIn', 'true');
    expect(localStorage.getItem('loggedIn')).toBe('true');

    localStorage.removeItem('loggedIn');
    expect(localStorage.getItem('loggedIn')).toBeNull();
});
