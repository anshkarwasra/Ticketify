# Simple Ticketing App

This is a simple ticketing app where you can track the progress of your tickets.

## Features
- Create new tickets
- Update existing tickets
- Track progress, priority, and status
- Categorize tickets into predefined categories

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up MongoDB
1. Create a MongoDB account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a cluster and obtain the connection string (MongoDB URI).
3. Add your IP address to the network access whitelist in MongoDB Atlas.

### 4. Create `.env.local` File
1. Inside the project directory, create a file named `.env.local`.
2. Add the following environment variable:
   ```env
   MONGODB_URI=<your-mongodb-atlas-uri>
   ```
   Replace `<your-mongodb-atlas-uri>` with the connection string you obtained from MongoDB Atlas.

### 5. Start the Development Server
```bash
npm run dev
```

### 6. Access the App
Open your browser and go to `http://localhost:3000` to access the app.


