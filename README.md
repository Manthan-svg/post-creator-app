# Post Creator Web App

A full-stack social posting platform where users can register, log in, create, like, and edit posts, and manage their sessions securely.

## 🚀 Features

- **User Registration:** Sign up with username, email, password, and age (with validation)
- **Login/Logout:** Secure authentication using JWT and bcrypt, with one-click logout
- **Create Posts:** Share your thoughts and see them instantly on your profile
- **Like Posts:** Like or unlike your posts with a single click
- **Edit Posts:** Update your posts easily from your profile
- **Profile Dashboard:** View all your posts in a modern, responsive UI
- **Validation:** Strong input validation for all user data
- **Modern UI:** Built with Tailwind CSS and EJS templates

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, Tailwind CSS
- **Authentication:** JWT, bcrypt
- **Validation:** express-validator

## 📦 Environment Variables

This project uses environment variables for sensitive configuration. **Never commit your `.env` file to version control.**

1. Copy the provided `.env.example` to `.env`:
   ```powershell
   Copy-Item .env.example .env
   ```
2. Edit `.env` and set your production values:
   ```env
   MONGO_URI=your_production_mongodb_uri
   JWT_SECRET=your_production_jwt_secret
   ```

> _Always use strong, unique secrets in production !_

## 📸 Screenshots

Below are some screenshots demonstrating the main features and UI of the application:

### 1. Registration Page
![Registration Page](Images/Screenshot%202025-05-26%20094918.png)
*User registration with validation for username, email, password, and age.*

### 2. Login Page
![Login Page](Images/Screenshot%202025-05-26%20095048.png)
*Secure login for registered users.*

### 3. No Posts Yet
![No Posts Yet](Images/Screenshot%202025-05-26%20094939.png)
*Message shown when a user has not created any posts yet.*

### 4. Profile Page
![Profile Page](Images/Screenshot%202025-05-26%20095025.png)
*Personalized dashboard showing user info and all posts.*

### 5. Create Post
![Create Post](Images/Screenshot%202025-05-26%20110317.png)
*Form to create a new post from your profile.*

### 6. Like Feature
![Like Feature](Images/Screenshot%202025-05-26%20105327.png)
*Like or unlike your posts with a single click.*

### 7. Edit Post
![Edit Post](Images/Screenshot%202025-05-26%20110542.png)
*Edit your existing posts easily.*

### 8. Post Edited Confirmation
![Post Edited Confirmation](Images/Screenshot%202025-05-26%20110549.png)
*Confirmation message displayed after successfully editing a post.*

### 9. Logout Feature
The application provides a secure logout option that invalidates the user's session and JWT token. With a single click on the "Log Out" button, users are safely signed out and redirected to the login page, ensuring their session cannot be reused.

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or cloud)
- npm

### Installation

1. **Clone the repository:**
   ```powershell
   git clone https://github.com/yourusername/post-creator-app.git
   cd post-creator-app
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your values.

4. **Start the server:**
   ```powershell
   node app.js
   ```
   The app will run on [http://localhost:3000](http://localhost:3000)

## 🧑‍💻 Usage

- Register a new account
- Log in with your credentials
- Create posts from your profile page
- Like or unlike your posts
- Edit your posts
- View all your posts in your dashboard
- Log out securely with the "Log Out" button

## 📂 Project Structure

```
.
├── app.js
├── config/
│   └── db.js
├── middlewares/
│   └── logout.middleware.js
├── models/
│   ├── post.models.js
│   └── users.models.js
├── routes/
│   ├── post.routes.js
│   └── user.routes.js
├── views/
│   ├── login.ejs
│   ├── profile.ejs
│   └── register.ejs
└── package.json
```

## ✨ What I Learned

- Secure authentication and session management
- RESTful API design
- Dynamic content rendering with EJS
- Full-stack application structure
- Implementing like and edit features for posts

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](LICENSE)

---

**Connect with me on [LinkedIn](https://www.linkedin.com/)!**  
Let me know your thoughts or suggestions.
