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

## Contribution Guidelines


We welcome contributions to improve the project! Before contributing, please follow the guidelines below:

### How to Contribute

1. **Fork the Repository**: Start by forking the repository to your own GitHub account.
2. **Clone Your Fork**: Clone the forked repository to your local machine.
   ```bash
   git clone <your-fork-repository-url>
   git checkout -b feature-branch

   ```
   Make Changes: Make the necessary changes or add new features.
   
   Commit Your Changes: After making changes, commit them to your branch.
   ```
3. **Commit your changes**:
    ```bash
    git add .
    git commit -m "Your commit message"
    git push origin feature-branch
   ```
4.**Open A PR"**:Create a Pull Request: Open a pull request (PR) from your branch to the main branch of the original repository.

### Code Style Guidelines
JavaScript/Node.js: Follow best practices for JavaScript (ES6+).
Code Formatting: Ensure that your code is properly formatted and follows a consistent style (use tools like Prettier or ESLint if necessary).
Documentation: Update the README or comments if your changes impact the documentation or functionality.
Testing
Before submitting a pull request, ensure that all tests pass and that your changes do not break any existing functionality. If applicable, write new tests to cover your changes.

### Proof of Work
Please include a video or screenshot demonstrating the feature you've added or the bug you've fixed. This helps the reviewers understand the functionality and ensures your changes work as expected.

### Review Process
Once your pull request is created, it will be reviewed by the maintainers. We might request further changes or improvements before merging it into the main codebase.add these guidelines to my readme file which is # Simple Ticketing App















