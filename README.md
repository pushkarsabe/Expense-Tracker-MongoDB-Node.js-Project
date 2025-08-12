Expense Tracker App

This is a full-stack expense tracker application built with a Node.js and MongoDB backend and a vanilla JavaScript frontend. It allows users to manage their daily expenses, set budgets, and access premium features through a Razorpay integration.

Features

    User Authentication: Secure user registration and login system using JWT (JSON Web Tokens).

    Expense Management:

        Add, view, and delete daily expenses.

        Expenses are categorized for better tracking (e.g., food, petrol, salary).

    Budget Tracking:

        Premium users can set a monthly budget.

        A visual progress bar shows the expenses against the set budget.

    Premium Membership:

        Users can upgrade to a premium membership via Razorpay.

        Premium users get access to additional features.

    Leaderboard: Premium users can view a leaderboard showing users with the highest expenses.

    Expense Reports: Premium users can download their expense data as a file.

    Data Visualization: Premium users can see their expenses visualized in pie and bar charts.

    Pagination: The expense list is paginated for better user experience.

    Password Reset: Users can reset their password via an email link.

Technologies Used

    Backend:

        Node.js

        Express.js

        MongoDB with Mongoose

        JWT for authentication

        Bcrypt for password hashing

        Razorpay for payments

        Cloudinary for file storage

    Frontend:

        HTML5

        CSS3

        JavaScript (ES6+)

        Axios for API requests

        Chart.js for data visualization

    Deployment:

        The application is configured for deployment on Vercel.

Project Structure

The project is divided into two main folders: api for the backend and frontend for the client-side application.

Backend (api/)

    controllers/: Contains the business logic for handling requests.

    models/: Defines the Mongoose schemas for the database.

    routes/: Defines the API endpoints.

    services/: Contains services for third-party integrations like AWS S3 and Cloudinary.

    middlware/: Contains authentication middleware.

    util/: Contains utility files, like the database connection.

    index.js: The main entry point for the backend server.

Frontend (frontend/)

    .html files: The structure of the web pages (login, signup, add expense, etc.).

    .css files: Styling for the web pages.

    .js files: Client-side logic for user interaction, API requests, and DOM manipulation.

Setup and Installation

    Clone the repository:
    Bash

git clone https://github.com/pushkarsabe/expense-tracker-mongodb-node.js-project.git
cd expense-tracker-mongodb-node.js-project

Install backend dependencies:
Bash

npm install

Create a .env file in the root directory and add the following environment variables:

MONGODB_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
RAZORPAY_KEY_ID=<your_razorpay_key_id>
RAZORPAY_KEY_SECRET=<your_razorpay_key_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
API_KEY=<your_sendinblue_api_key>

Start the development server:
Bash

    npm run dev

    Open the application:
    Open the frontend/login.html file in your web browser.

API Endpoints

The API routes are defined in the api/routes/ directory.

    User Routes (/api/user):

        POST /signup: Register a new user.

        POST /login: Login an existing user.

        GET /userData: Get user data.

    Expense Routes (/api/expense):

        POST /add-expense: Add a new expense.

        GET /get-expense: Get all expenses for the user.

        DELETE /delete-expense/:id: Delete an expense.

        GET /download: Download expenses as a file (premium).

    Purchase Routes (/api/purchase):

        GET /premiummembership: Initiate a Razorpay payment for premium membership.

        POST /updatetransactionstatus: Update the transaction status after payment.

    Premium Routes (/api/premium):

        GET /showLeaderBoard: Get the leaderboard data (premium).

    Forgot Password Routes (/api/password):

        POST /forgotpassword: Send a password reset link.

        GET /resetpassword/:id: Display the password reset form.

        POST /updatepassword/:id: Update the user's password.
