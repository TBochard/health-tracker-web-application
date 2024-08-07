test('User signup and data storage', () => {
    const signupResult = submitSignupForm('John Doe', 'john@example.com', 'password123');
    expect(signupResult.status).toBe('success');
    expect(localStorage.getItem('user')).toEqual('john@example.com');
});

test('Logged-in user access to dashboard', () => {
    loginUser('john@example.com', 'password123');
    const dashboardAccess = loadPage('/dashboard.html');
    expect(dashboardAccess.status).toBe(200);
});
