
1. **Expense Tracker Application**

## Features

1. **Expense Tracking:**
   - Users can log new expenses by providing details like title and amount.
   - Each expense is automatically assigned a unique identifier.

2. **Data Management:**
   - Utilizes a JSON server for seamless storage and retrieval of expense data.

3. **Expense Overview:**
   - The main dashboard offers a snapshot of total expenditure, individual contributions, and outstanding balances.

4. **Upcoming Enhancements:**
   - Planned upgrades encompass selecting data by month, implementing user authentication, and imposing constraints on altering past records.

## How to Use

1. **Recording Expenses:**
   - Access the "Add New Expense" page through the provided link.
   - Input expense particulars such as title and amount.
   - Click "Add Expense" to register the expense.

2. **Data Overview:**
   - Visit the main dashboard to review a summary of expenses, individual contributions, and outstanding balances.
   - The application computes and displays debtors and creditors.

3. **Future Additions:**
   - Anticipated additions involve month-wise data selection, user authentication, and safeguarding previous records from alterations.

## Prerequisites

Ensure that your machine has the following installed:

- Node.js
- npm (Node Package Manager)

## Cloning the Repository

git clone ```<repository-url>```

cd ```<project-folder>```


## Instructions for Execution

1. **Setting up the Project:**
    - npx create-react-app expense-tracker - if creating anew
    - cd expense-tracker - if starting fresh
    - Install required packages:
    - npm install -g json-server
    - npm install react-router-dom
    - Create a `db.json` file in the project root with appropriate initial data. Skip if already exists.
    - Initiate the JSON server with: `json-server --watch db.json --port 3000`

2. **Launching the React App:**
   - Ensure all dependencies are installed: `npm install`
   - Begin the React app: `npm start` Confirm with Y when prompted.

3. **Accessing the Application:**
   - Open your browser and navigate to `http://localhost:3001` (or the specified port by your React app).

4. **Recording Expenses:**
   - Head to the "Add New Expense" page to log new expenses.

5. **Exploring the Dashboard:**
   - Access the main dashboard to review expense summaries and balances.

6. **Discovering Future Features:**
   - Stay updated for forthcoming enhancements.

## Project Organization

The project adheres to a modular structure featuring components like `Home`, `AddExpense`, and `App`. Routing is facilitated by `react-router-dom`. Bootstrap is employed for styling, while Font Awesome supplies icons.

---

*Note: Node.js and npm must be installed on your machine prior to running the application.*
