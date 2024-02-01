#  Expense Tracker Application


## Features

1. **Expense Recording:**
   - Users can add new expenses by filling in details such as title and amount.
   - Each expense is assigned a unique identifier automatically.

2. **Data Storage:**
   - The application utilizes a JSON server to store and retrieve expense data.

3. **Expense Overview:**
   - The main dashboard displays a summary of total spending, individual contributions, and balance to be settled.

4. **Future Developments:**
   - Planned features include month-wise data selection, login functionality, and restrictions on updating previous months.

## How it Works

1. **Expense Recording:**
   - Navigate to the "Add New Expense" page using the provided link.
   - Fill in the details of the expense, such as title and amount.
   - Click "Add Expense" to record the expense.

2. **Data Overview:**
   - Visit the main dashboard to view a summary of total spending, individual contributions, and balances.
   - The application calculates and displays who owes money to whom.

3. **Future Features:**
   - Future developments include selecting data for a specific month, login functionality, and preventing updates for previous months.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

## Clone the Repository

git clone ```<repository-url>```

cd ```<project-folder>```


## Instructions to Run

1. **Setup your project:**
    - npx create-react-app expense-tracker - in case you are doing on your own
    - cd expense-tracker - in case you are creating on your own
    - Install required packages:
    - npm install -g json-server
    - npm install react-router-dom
    - Create a `db.json` file in the root of your project with appropriate initial data. Already in the project omit this.
    - Start the JSON server using the command: `json-server --watch db.json --port 3000`

2. **Run the React App:**
   - Ensure dependencies are installed: `npm install`
   - Start the React app: `npm start` Enter Y when prompted.

3. **Access the Application:**
   - Open your browser and go to `http://localhost:3001` (or the port specified by your React app).

4. **Record Expenses:**
   - Navigate to the "Add New Expense" page to record new expenses.

5. **View Dashboard:**
   - Go to the main dashboard to view the summary of expenses and balances.

6. **Explore Future Features:**
   - Keep an eye on future updates for additional features.

## Project Structure

The project follows a modular structure with components like `Home`, `AddExpense`, and `App`. Routing is handled using `react-router-dom`. The application uses Bootstrap for styling and Font Awesome for icons.

---

*Note: Ensure you have Node.js and npm installed on your machine before running the application.*
