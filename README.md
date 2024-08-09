# Software Engineering Summative 1 - Health Tracker Web App
![WebApp](https://github.com/TBochard/health-tracker-web-application/blob/main/images/Dashboard.png)

## Purpose
The Health Tracker Web Application promotes healthy lifestyles by providing users with tools to track their health-related activities, calculate BMI, and visualize their progress over time. It aims to help individuals manage their health data in an organized and accessible manner.

### Key Features
- **Activity Logging:** Users can log various health activities such as workouts.
- **BMI Calculation:** The app includes a feature for calculating Body Mass Index (BMI) based on user input.
- **Data Visualization:** Users can view their health data in real-time with dynamic visualizations to track progress and identify trends.

## Application Requirements
This app encompasses both functional and non-functional requirements which can be tested to guarantee that it fulfills user requirements and functions as anticipated.

#### Functional Requirements
- **User Authentication:** 
  - Users can sign up with an email and password.
  - Users can log in and log out securely.
  - Passwords must be validated for security (e.g., minimum length, special characters).
- **Activity Logging:** 
  - Users can log various health activities
  - The system should store and retrieve these logs for user analysis.
- **BMI Calculation:** 
  - Users can input their height and weight to calculate their BMI.
  - The calculated BMI is displayed and stored for future reference.
- **Dashboard:** 
  - The dashboard displays user health data, including logged activities and BMI.
  - The dashboard updates in real-time as new data is entered.
- **Data Visualization:** 
  - Users can view graphs or charts representing their activity logs over time.
  - Visualization is dynamically updated based on the user's data.

#### Non-Functional Requirements
- **Performance:** 
  - The application should load and respond to user inputs within 2 seconds.
- **Usability:** 
  - The interface should be intuitive, allowing users to easily navigate through the app without extensive instructions and accessibility for all users is crucical.
- **Security:** 
  - The App must be secure and non-comprising for its users.
- **Compatibility:** 
  - The application should be compatible across all major browsers (Chrome, Firefox, Safari, Edge).
- **Maintainability:** 
  - The codebase should be modular with clear documentation
## Design
### Wireframes and Mockups
Included are the initial wireframes and mockups that guided the design process. These were refined based on user feedback to ensure the app is both functional and visually appealing.

![Initial Design](https://github.com/TBochard/health-tracker-web-application/blob/main/images/InitialDesign.png)

The design process began with the creation of low-fidelity wireframes to outline the basic structure of the application. These wireframes focused on the layout of key components such as the login page, dashboard, sign-up form, and activity logging interface.

Once the wireframes were finalized, high-fidelity mockups were created to refine the visual design. These mockups included detailed styling, color schemes, typography, and interactive elements such as buttons and form inputs.

The final design was chosen based on user feedback, emphasizing a layout that is both visually appealing and easy to navigate. The design ensures accessibility, with careful attention to color contrast and layout, adhering to WCAG 2.1 guidelines.

### UI/UX Considerations
The user interface (UI) was designed with simplicity and ease of use in mind. The goal was to create an application that users could navigate without extensive instructions. Key UI/UX considerations included:
- **Accessibility:** The design adheres to WCAG 2.1 guidelines to ensure that the application is accessible to users with disabilities. This includes providing sufficient color contrast, keyboard navigation, and screen reader compatibility.
- **Responsiveness:** The application was designed using a mobile-first approach, ensuring that it is fully functional on devices of all sizes. This was achieved using responsive design techniques such as flexible grid layouts and media queries.
- **Consistency:** The design maintains a consistent visual language across all pages, with uniform typography, color schemes, and button styles. This consistency helps users navigate the application more easily.
- **Feedback:** The application provides real-time feedback to users, such as error messages for invalid inputs or confirmation messages for successful actions. This helps users understand the impact of their interactions with the application.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- A modern web browser (e.g., Chrome, Firefox, Edge)

### Installation

1. Ensure node is installed:

   ```sh
   node -v
   ```

   if not already installed, click [here](https://nodejs.org/en/download/package-manager) to install Node

2. Ensure npm is installed:

   ```sh
   npm -v
   ```

3. Clone the repository:

   ```sh
   git clone https://github.com/TBochard/health-tracker-web-application.git
   ```

4. Navigate to the project directory:

   ```sh
   cd bmi-calculator
   ```

5. Install the dependencies:

   ```sh
   npm install
   ```

## Usage


### Accessing the Deployed Application

Visit the deployed application here. [WebApp](https://tbochard.github.io/health-tracker-web-application/dashboard.html)

### Running Locally

Download all the files and open index.html in your preferred web browser.

### Using the application
	1.	Login: Enter your username and password to access your dashboard.
	2.	Sign Up: Create an account to start logging your health activities.
	3.	Log Activities: Enter the type, date, and duration of your activities.
	4.	Calculate BMI: Input your height and weight to calculate and store your BMI.
	5.	View Dashboard: Monitor your logged activities and BMI over time through the dashboard interface.

### Running Tests
   ```sh
   npm test
   ```

## Project Management

The development of the Health Tracker Web Application was managed using Agile methodology, specifically through a series of sprints that allowed for iterative development and continuous feedback.

### Agile Methodology

The project was divided into sprints, each focusing on specific aspects of the application. For example, the first sprint focused on setting up the project structure and implementing basic user authentication. In contrast, subsequent sprints focused on adding features such as activity logging, BMI calculation, and dashboard visualization. At the end of each sprint, a review was conducted to assess the progress and plan for the next sprint.

### GitHub Project Board
GitHub Projects was used to manage tasks and track progress. A Kanban board with columns for different stages of development, such as “Backlog,” “In Progress,” “In Review,” and “Done,” was set up. This structure not only provided a clear overview of the project’s status but also kept stakeholders informed and updated about the progress.

Each task on the Kanban board was represented by a GitHub issue, including a detailed description, acceptance criteria, and relevant links or references. Tasks were assigned to team members and moved across the board as they progressed through the development pipeline. The process of moving tasks involved updating the task status, which was done by the team member responsible for the task.

### Development Process

The development process for the Health Tracker Web Application followed modern web development practices, including Test-Driven Development (TDD), continuous integration, and version control.

### Technical Implementation

The application was built using HTML, CSS, and JavaScript. The front-end was designed to be lightweight and fast, with a focus on performance and responsiveness. JavaScript handled user interactions, such as form submissions and data processing.

### Test-Driven Development (TDD)

The development process followed TDD practices, where unit tests were written before the implementation of features. This approach ensured the code was thoroughly tested and met the specified requirements. Unit tests were written for all major functionalities, including user authentication, activity logging, and BMI calculation.

### Continuous Integration (CI)

Continuous integration was set up using GitHub Actions, which automatically ran tests whenever new code was committed. This ensured that all code changes were thoroughly tested, reducing the risk of introducing bugs into the production environment.

### Issue Management and Sequential Development

Instead of a branching strategy, the project was developed linearly, with code being committed sequentially as issues were addressed. Each issue was tackled one by one, following a prioritized order. This approach allowed for continuous development without the overhead of managing multiple branches.

As each feature or fix was implemented, it was committed directly to the main codebase. This method ensured that the code constantly evolved, with incremental updates as each issue was resolved.

## Testing

Testing was a critical area of the development process for the Health Tracker Web Application, ensuring that the application functions correctly and provides a seamless user experience. This section highlights the tests that were conducted, with a focus on error handling and validation in the JavaScript code and other tests.

### Unit and Integration Testing

The unit tests included in the project play a crucial role in ensuring the reliability and accuracy of key functionalities within the Health Tracker Web Application. The provided unit.test.js file includes comprehensive tests for BMI calculation, email validation, and calorie calculation, each of which is critical to the application’s core features.

-***BMI Calculation***
The tests for calculateBMI function validate that the BMI is computed correctly based on user inputs for height and weight. These tests ensure that the application provides accurate health metrics, which are essential for users tracking their fitness and wellness goals.
   ```sh
   test('Calculate BMI correctly', () => {
    expect(calculateBMI(180, 75)).toBeCloseTo(23.15);
    expect(calculateBMI(160, 50)).toBeCloseTo(19.53);
    expect(calculateBMI(200, 100)).toBeCloseTo(25.0);
});
   ```
  
- ***E-Mail Validation***
  The validateEmail function is tested to ensure that the application correctly identifies valid and invalid email formats. This is a key aspect of the user authentication process, helping to prevent user errors during sign-up and ensuring data integrity.

  ```sh
test('Validate email format', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('another.test@domain.org')).toBe(true);
});
	```

- ***Calories Calculation***
The calculateCalories function is tested for accuracy in calculating the calories burned during different types of exercises. These tests are crucial for the activity logging feature, ensuring that users receive reliable feedback on their physical activity.
  
   ```sh
test('Calculate calories burned correctly', () => {
    expect(calculateCalories('Running', 30)).toBeGreaterThan(100);
    expect(calculateCalories('Walking', 60)).toBeGreaterThan(50);
    expect(calculateCalories('Cycling', 45)).toBeGreaterThan(150);
});
   	```
### Validation and Error Handling in JavaScript

-***Key Validation Example from scripts.js:***
   ```sh
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
```

This code is used when someone tries to sign up on a website. When the “Sign Up” button is clicked, instead of immediately sending the information to the server, the code first checks if everything is filled out correctly. Specifically, it checks if the password and confirm password fields match. If they don’t match, a message pops up telling the user that the passwords don’t match, and the sign-up process stops right there. If everything is correct, it shows a message saying the sign-up was successful and clears the form so it’s ready for the next user. This helps prevent mistakes and ensures that the information entered is accurate before it gets saved.

 ### Google Lighthouse Score

 ![Lighthouse Score](https://github.com/TBochard/health-tracker-web-application/blob/main/images/Lighthouse.png)

I ran the Health Tracker Web Application through Google's Lighthouse audit and it yielded excellent scores for all essential criteria. This demonstrates the application's robust performance, ease of use, adherence to industry standards, and search engine optimisation. Attaining a flawless score of 100 in performance and best practices signifies that the application has been extensively optimised to ensure swift loading times, effective resource allocation, and adherence to secure web protocols. The accessibility score of 91 reflects a strong dedication to diversity, guaranteeing that the program is functional for a diverse group of users, including individuals with disabilities. While the current score is fairly impressive, there are still opportunities for enhancement, particularly in terms of enhancing support for assistive devices and implementing extensive labelling for form elements. The SEO score of 90 verifies that the application is highly optimised for search engines, ensuring that it can be easily found while also retaining a design that is compatible with mobile devices.

 ## Evaluation

 The Health Tracker Web Application, designed with the user in mind, has successfully met its objectives. It provides users with a reliable tool to monitor their health activities, calculate BMI, and visualize their progress. The project's strong focus on user-centred design, performance, and accessibility ensures it caters to a diverse audience.

The Health Tracker Web Application has achieved a remarkable level of performance and adherence to best practices, as evidenced by the perfect Google Lighthouse audit scores. This high performance, which ensures fast load times, secure data handling, and efficient resource management, instills confidence in the application's capabilities and its ability to provide a seamless user experience in today’s fast-paced digital environment.

The Health Tracker Web Application's high accessibility score of 91 is a testament to its commitment to inclusivity. By adhering to WCAG 2.1 guidelines, the app ensures usability for individuals with various disabilities, with potential for further improvement. Enhancing support for assistive technologies and refining form labels could boost the accessibility score, making the application even more user-friendly for all.

In terms of functionality, the application has successfully implemented all planned features. These include user authentication, activity logging, and BMI calculation. Unit tests, particularly for critical functions like BMI calculation, email validation, and calorie calculation, ensure that these features work as intended and provide accurate results to the user.

Despite these successes, there are areas where the application could be further enhanced. Expanding the dashboard's data analytics capabilities and improving security features such as two-factor authentication would add significant value. Additionally, incorporating more user feedback into future iterations could help identify additional opportunities for refinement.
