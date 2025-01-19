# API Documentation for Campaign Management System

This document outlines the routes and their functionalities in the Campaign Management System for frontend developers. The routes are divided into sections for Volunteers, NGOs, and common functionalities.

---

## Volunteer Routes

### **Authentication**
- **Register a Volunteer**
  - **POST** `api/auth/volunteer/register`
  - Validates and registers a new volunteer.
  - Middleware: `validateRegistration`

- **Login for Volunteer**
  - **POST** `api/auth/volunteer/login`
  - Validates credentials and logs in a volunteer.
  - Middleware: `validateLogin`

- **Logout**
  - **GET** `api/auth/logout`
  - Logs out the authenticated user.

### **Profile Management**
- **View Profile**
  - **GET** `api/auth/volunteer/profile`
  - Retrieves the profile details of the logged-in volunteer.
  - Middleware: `authMiddleware`

- **Update Profile**
  - **POST** `api/auth/volunteer/updateProfile`
  - Updates the volunteer's profile information.
  - Middleware: `authMiddleware`, `validateUpdateProfile`

### **Campaign Management**
- **Register for a Campaign**
  - **POST** `api/volunteer/registerCampaign`
  - Allows a volunteer to register for a campaign.
  - Middleware: `authMiddleware`, `validateRegisterCampaign`

- **View Available Campaigns**
  - **GET** `api/volunteer/getCampaigns`
  - Fetches the list of available campaigns for volunteers.
  - Middleware: `authMiddleware`

- **Get Campaigns by Interest**
  - **GET** `api/volunteer/getCampaignByInterest`
  - Lists campaigns based on the volunteer's interests.
  - Middleware: `authMiddleware`

- **Get Campaigns by Skills**
  - **GET** `api/volunteer/getCampaignBySkills`
  - Lists campaigns matching the volunteer's skills.
  - Middleware: `authMiddleware`

### **Certificates**
- **View Certificates**
  - **GET** `/volunteer/certificates`
  - Lists certificates of completed campaigns.
  - Middleware: `authMiddleware`

- **Get Certificate for a Specific Campaign**
  - **GET** `/volunteer/campaign/:id/certificate`
  - Retrieves the certificate for a completed campaign.
  - Middleware: `authMiddleware`

---

## NGO Routes

### **Authentication**
- **Register an NGO**
  - **POST** `api/auth/ngo/register`
  - Registers a new NGO.
  - Middleware: `validateNGORegistration`

- **Login for NGO**
  - **POST** `api/auth/ngo/login`
  - Validates credentials and logs in an NGO.
  - Middleware: `validateNGOLogin`

### **Profile Management**
- **View NGO Profile**
  - **GET** `api/auth/ngo/profile`
  - Retrieves the profile details of the logged-in NGO.
  - Middleware: `ngoAuthMiddleware`

- **Update NGO Profile**
  - **POST** `api/auth/ngo/updateProfile`
  - Updates the NGO's profile information.
  - Middleware: `ngoAuthMiddleware`, `validateNGOUpdateProfile`

### **Campaign Management**
- **Create a Campaign**
  - **POST** `api/ngo/campaign/create`
  - Allows an NGO to create a new campaign.
  - Middleware: `ngoAuthMiddleware`, `validateCampaignData`

- **List Campaigns**
  - **GET** `api/ngo/campaigns`
  - Fetches the list of campaigns created by the NGO.
  - Middleware: `ngoAuthMiddleware`

- **Get Campaign Details**
  - **GET** `api/ngo/campaign/:id`
  - Retrieves the details of a specific campaign.
  - Middleware: `ngoAuthMiddleware`

- **Update Campaign Details**
  - **PUT** `api/ngo/campaign/:id/update`
  - Updates the details of a specific campaign.
  - Middleware: `ngoAuthMiddleware`, `validateUpdateCampaignData`

- **Delete Campaign**
  - **DELETE** `/campaign/:id/delete`
  - Deletes a specific campaign.
  - Middleware: `ngoAuthMiddleware`

- **Update Campaign Progress**
  - **POST** `api/ngo/campaign/:id/updateProgress`
  - Updates the progress of a campaign.
  - Middleware: `ngoAuthMiddleware`, `validateProgressUpdate`

---

## Common Routes

- **Health Check**
  - **GET** `/health`
  - Verifies the system's health status.

---

## Application Routes Integration

- **Health Routes**
  - `app.use(healthRoutes);`

- **Authentication Routes**
  - `app.use("/api/auth", authRoutes);`

- **NGO Routes**
  - `app.use("/api/ngo", campaignRoute);`

- **Volunteer Routes**
  - `app.use("/api/volunteer", registerRoute);`

- **Certificate Routes**
  - `app.use("/api", certificateRoutes);`

---

### Notes for Frontend Developers
- Ensure proper authorization headers are included for all routes requiring authentication.
- Follow the specific middleware requirements to validate data before making requests.
- Use the defined endpoints to build user interfaces for NGOs and volunteers based on the outlined functionalities.

This documentation should help in seamlessly integrating the backend API with the frontend components.

