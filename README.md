# ImpactLink

ImpactLink is a collaborative platform designed to connect NGOs, volunteers, and social impact projects. It includes a backend API and a frontend application to manage campaigns, volunteers, and certificates, among other features.

## Table of Contents
- [ImpactLink](#impactlink)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Environment Variables](#environment-variables)
    - [Backend (`backend/.env`)](#backend-backendenv)
  - [Contributing](#contributing)
  - [License](#license)

---

## Getting Started
Follow these instructions to set up the project on your local machine for development and testing purposes.

### Prerequisites
Make sure you have the following installed on your machine:
- Node.js (v14 or above)
- npm (Node Package Manager)
- Git

Clone the repository:
```bash
git clone https://github.com/Yashparmar1125/ImpactLink.git
cd ImpactLink
```

---

## Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `backend` folder.
   - Add the necessary environment variables as described in the `.env.example` file.
4. Start the server:
   ```bash
   npm start
   ```

The backend will run on `http://localhost:5000` by default.

---

## Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure secrets:
   - Place the `client_secret_*.json` file in the `frontend` folder (this will be provided by the admin).
4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173` by default.

---

## Environment Variables
The project uses environment variables to configure sensitive data. Ensure you have the following variables in your `.env` files:

### Backend (`backend/.env`)
```env
DATABASE_URL=<your_database_url>
JWT_SECRET=<your_jwt_secret>
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
```



## Contributing
We welcome contributions from the community! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request on GitHub.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
