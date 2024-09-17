# Birthday Reminder App

This application enables users to register their birthdays and automatically sends them birthday wishes via email. It also displays a list of all registered users along with their upcoming birthdays.

## Features

-   User Sign-Up
-   User Sign_In
-   Birthday List Display
-   Scheduled Task to Send Daily Emails
-   Automated Birthday Wishes via Email

## Prerequisites

Before you begin, make sure you have:

-   Node.js and npm installed.
-   A MongoDB database set up and running.
-   A Gmail account for email notifications.
-   A .env file created with the following variables:
    ```env
    PORT=5000
    DB_URI=your_mongodb_uri
    MAIL_USER=your_gmail_account
    MAIL_PASSWORD=your_gmail_password
    ```

1.  Clone the repository using the following comand:
    ```bash
    git clone https://github.com/yourusername/birthday-schedular.git`
    ```
2. Go to the project directory:
    ```bash
    cd birthday-scheduler
    ```
3.  Install the required dependencies:
    ```bash
    npm install
    ```
4.  Add your environment variables by creating a .env file in the root directory.mentioned above.

## Running the Application

1. Start the application by running:

    ```bash
    npm run dev
    ```

2.  Visit the app in your browser at http://localhost:3000 to access the user interface.
3.  Sign up by entering your username, email, and birthdate. The list of all registered users and their birthdates will be displayed.
4.  A scheduled job will run daily at 7 AM to check for users with birthdays and send them an email.
