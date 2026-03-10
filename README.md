(This coontent is written with the help of AI.)
# Todo App

A simple web-based Todo application built with Node.js, Express, and MongoDB.

## Features

- User registration and login
- Create, read, update, and delete todos
- Secure authentication with JWT tokens
- Server-side rendering with EJS templates
- Responsive UI with CSS styling (For just focus on backend I use ai for frontend )




## Project Structure

- `app.js` - Main application file
- `config/dbcon.js` - Database connection configuration
- `controllers/` - Route handlers
- `models/` - Mongoose models for User and Todo
- `routers/` - Express routes
- `views/` - EJS templates
- `server.js` - Server startup (currently empty)

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: bcrypt for password hashing, jsonwebtoken for tokens
- **Frontend**: EJS templating, CSS
- **Other**: cookie-parser, dotenv for environment variables

## API Endpoints

### User Routes
- `GET /user/signup` - Signup page
- `POST /user/signup` - Register new user
- `GET /user/login` - Login page
- `POST /user/login` - Authenticate user

### Todo Routes
- `POST /todo/create` - Create new todo
- `GET /todo/edit` - Edit todo page
- `POST /todo/update` - Update todo
- `POST /todo/deleted` - Delete todo

### Other
- `GET /` - Home page (landing page)
- `GET /todoapp` - Main todo application (requires authentication)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

