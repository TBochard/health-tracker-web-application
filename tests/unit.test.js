
test('Index page loads successfully', () => {
    const result = loadPage('/index.html');
    expect(result.status).toBe(200);
});

test('Login form submits without error', () => {
    const loginResult = submitLoginForm('test@example.com', 'password123');
    expect(loginResult.status).toBe('success');
});
