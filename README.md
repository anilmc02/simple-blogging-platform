# Simple Blogging Platform

A simple blogging platform where users can register, log in, create, edit, and delete posts. This application is built using a React frontend with a Node.js backend and MongoDB for data storage.

## Features

- **User Authentication**: Users can register, log in, and manage their sessions using JWT authentication.
- **Post Management**: Users can create, edit, and delete posts. Posts include a title, summary, content, and an optional cover image.
- **Post Viewing**: Users can view a list of posts or individual post details.
- **Image Upload**: Users can upload images to be used as covers for their posts.
- **User Profile**: Users can view their profile information.

## Technologies

- **Frontend**: React, React Router, ReactQuill (for rich text editing)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **File Handling**: Multer (for handling file uploads)
- **Styling**: CSS

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/simple-blogging-platform.git
    ```

2. **Install Backend Dependencies**

    Navigate to the backend directory and install the dependencies:

    ```bash
    cd backend
    yarn install
    ```

3. **Install Frontend Dependencies**

    Navigate to the frontend directory and install the dependencies:

    ```bash
    cd frontend
    yarn install
    ```

4. **Configure Environment Variables**

    Create a `.env` file in the backend directory with the following content:

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

    Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_jwt_secret` with a secret key for JWT.

5. **Run the Application**

    Start the backend server:

    ```bash
    cd backend
    yarn start
    ```

    Start the frontend development server:

    ```bash
    cd frontend
    yarn start
    ```

6. **Access the Application**

    Open your browser and navigate to `http://localhost:3000` to use the application.

## API Endpoints

- **POST /register**: Register a new user
- **POST /login**: Log in an existing user
- **GET /profile**: Get the logged-in user's profile information
- **POST /logout**: Log out the current user
- **POST /post**: Create a new post
- **PUT /post**: Edit an existing post
- **GET /post**: Get a list of posts
- **GET /post/:id**: Get details of a specific post
- **DELETE /post/:id**: Delete a specific post

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out to [anilmc002@gmail.com](anilmc002@gmail.com).

