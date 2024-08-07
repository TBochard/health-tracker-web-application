// unit.test.js

const { calculateBMI, validateEmail, calculateCalories } = require('../js/scripts');

// Test for accurate BMI calculation
test('Calculate BMI correctly', () => {
    expect(calculateBMI(180, 75)).toBeCloseTo(23.15);
    expect(calculateBMI(160, 50)).toBeCloseTo(19.53);
    expect(calculateBMI(200, 100)).toBeCloseTo(25.0);
});

// Test for email validation
test('Validate email format', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('another.test@domain.org')).toBe(true);
});

// Test for calories burned calculation
test('Calculate calories burned correctly', () => {
    expect(calculateCalories('Running', 30)).toBeGreaterThan(100);
    expect(calculateCalories('Walking', 60)).toBeGreaterThan(50);
    expect(calculateCalories('Cycling', 45)).toBeGreaterThan(150);
});
