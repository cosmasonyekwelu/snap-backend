# Snap Backend

Backend API for the Snap collaboration project — team practice on structured Node.js REST API development and Git workflow.

---

## Project Overview

This repository contains the backend API for **Snap**, a collaborative productivity application being built as part of a team internship project at Tech Studio.

The backend focuses on:

- Secure user authentication
- Task management (Todo)
- Reminders
- Team planning

This project is designed to reinforce **team collaboration workflows**, **Git branching strategies**, and **REST API development using Node.js and MongoDB**.

---

## Team Roles

| Member    | Responsibility           |
| --------- | ------------------------ |
| Cosmas    | Team Lead — Planning API |
| Tobi      | Authentication API       |
| Stephanie | Todo List API            |
| Daniel    | Reminders API            |

Each member owns a module developed in a `feature/*` branch and merged into the `develop` branch through Pull Requests.

---

## Tech Stack

- Node.js (JavaScript runtime)
- Express.js (Web framework)
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- Nodemon (development)

---

## Architecture and Folder Structure

```
snap-backend/
├── src/
│   ├── config/        # Database and configuration
│   ├── middleware/    # Authentication and error handlers
│   ├── models/        # Mongoose schema models
│   ├── controllers/   # Request handlers
│   ├── routes/        # Express routers
│   ├── app.js         # Express application
│   └── server.js      # Server bootstrap
├── .env.example       # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

---

## Installation and Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/cosmasonyekwelu/snap-backend.git
   cd snap-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment file**

   ```bash
   cp .env.example .env
   ```

4. **Configure `.env`**

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

---

## API Endpoints

### Health Check

```
GET /api/health
```

Returns server status.

---

### Authentication (Tobi)

```
POST /api/auth/register
POST /api/auth/login
```

---

### Todo List (Stephanie)

```
GET /api/todos
POST /api/todos
PUT /api/todos/:id
DELETE /api/todos/:id
```

---

### Reminders (Daniel)

```
GET /api/reminders
POST /api/reminders
PUT /api/reminders/:id
DELETE /api/reminders/:id
```

---

### Planning (Cosmas)

```
GET /api/planning
POST /api/planning
GET /api/planning/:id
PUT /api/planning/:id
DELETE /api/planning/:id
```

All planning routes require JWT authentication.

---

## Branching Strategy

This project follows a feature-driven collaboration workflow:

```
main
develop
feature/auth
feature/todo
feature/reminders
feature/planning
```

- All development occurs in `feature/*` branches
- Feature branches are merged into `develop` after review By the Team Lead
- `develop` serves as the integration branch
- Only the team lead merges `develop` into `main`

---

## Contribution Workflow

1. Checkout `develop`

   ```bash
   git checkout develop
   ```

2. Create a feature branch

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit small, logical changes

4. Push your branch

   ```bash
   git push origin feature/your-feature
   ```

5. Open a Pull Request to `develop`

6. Review → Merge → Update `develop` By Team Lead

---

## Code Standards and Best Practices

- Use consistent naming conventions
- Keep controllers thin; move logic to services
- Validate all inputs
- Document new endpoints in the README
- Write clear, descriptive commit messages

---

## Scripts

| Script        | Description               |
| ------------- | ------------------------- |
| `npm start`   | Start server              |
| `npm run dev` | Start server with nodemon |
| `npm test`    | Runs tests (future scope) |

---

## Acknowledgements

This project is part of a structured FULLSTACK internship task at Tech Studio, focused on:

- Git collaboration workflows
- REST API design
- Team communication
- Modular web app development

---

## License

This project is intended for internal use and learning purposes.

---
