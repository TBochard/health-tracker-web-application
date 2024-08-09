# Software Engineering Summative 1 - Health Tracker Web App
![WebApp](https://github.com/TBochard/health-tracker-web-application/blob/main/images/Screenshot%202024-08-09%20at%2019.41.29.png)

### Purpose
The Health Tracker Web Application promotes healthy lifestyles by providing users with tools to track their health-related activities, calculate BMI, and visualize their progress over time. It aims to help individuals manage their health data in an organized and accessible manner.

### Key Features
- **Activity Logging:** Users can log various health activities such as workouts.
- **BMI Calculation:** The app includes a feature for calculating Body Mass Index (BMI) based on user input.
- **Data Visualization:** Users can view their health data in real-time with dynamic visualizations to track progress and identify trends.

### Application Requirements
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

[Initial Design](https://github.com/TBochard/health-tracker-web-application/blob/main/images/Screenshot%202024-08-09%20at%2019.55.11.png)

The Health Tracker Web Application's design was created using Figma. It began with wireframes to outline the basic structure and then progressed to high-fidelity mockups that integrated user feedback. Figma's auto-layout feature was used to develop components, ensuring a responsive design. Interactive prototypes were tested to guarantee a seamless user experience. To adhere to WCAG 2.1 accessibility standards, the design emphasizes high colour contrast, clear focus states for keyboard navigation, and consistent, scalable text. Alt text placeholders were also included for images, and the overall navigation was structured to be intuitive and accessible on all devices. This comprehensive process guarantees that the application is functional and inclusive for all users.

### Prerequisites

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
   git clone https://github.com/HaseebAhmed6/bmi-calculator.git
   ```

4. Navigate to the project directory:

   ```sh
   cd bmi-calculator
   ```

5. Install the dependencies:

   ```sh
   npm install
   ```
