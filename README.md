# M14-Tech-Blog

## Description
The Tech Blog is a CMS-style blog site where developers can create, edit, delete, and comment on blog posts. It uses Node.js and Express.js for the backend, Handlebars.js for the front-end templating, and Sequelize as the ORM to interact with a MySQL database.

## Installation
1. Clone the repository to your local machine:
2. Navigate to the project directory
3. Install the necessary dependencies 

## Usage
1. Create a .env  file in the root of your project to store your environmen variables:
    ```
    DB_NAME='your-database-name'
    DB_USER='your-database-username'
    DB_PASSWORD='your-database-password'
    SESSION_SECRET='your-session-secret'
    ```
2. Setup the database:
    ```
    CREATE DATABASE your-database-name;
    ```
3. Seed the database:
    ```
    npm run seed
    ```
4. Start the application:
    ```
    npm start
    ```
5. Open your browser and navigate to:
    ```
    http://localhost:3001
    ```

## Deployed link

## Routes
## API Routes
- POST /api/users/login: Logs in a user
- POST /api/users/logout: Logs out a user
- POST /api/posts: Creates a new post
- PUT /api/posts/:id: Updates a post
- DELETE /api/posts/:id: Deletes a post
- POST /api/comments: Creates a new comment

## HTML Routes
- GET /login: Login page
- GET /signup: Signup page
- GET /dashboard: User's dashboard (requires authentication)
- GET /: Homepage

## Middleware
- withAuth: Middleware to protect routes that require authentication.

## Models
- User: Represents a user in the system.
- Post: Represents a blog post.
- Comment: Represents a comment on a blog post.

## Contributing
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Create a new Pull Request.

Questions
If you have any questions, please open an issue or contact tylerzhao103@gmail.com.

