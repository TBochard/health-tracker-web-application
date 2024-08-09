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

## Evaluation
