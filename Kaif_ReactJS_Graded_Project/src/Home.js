import React, { useState, useEffect } from "react";

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetch all expenses initially
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await fetch("http://localhost:3000/expenses");
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  // Calculate total spent by each individual
  const totalSpentByPerson = {};
  expenses.forEach((expense) => {
    totalSpentByPerson[expense.person] =
      (totalSpentByPerson[expense.person] || 0) + parseFloat(expense.amount);
  });

  return (
    <div className="container mt-5">
      <h2>Expense Summary</h2>

      {/* Display expenses */}
      <ul className="list-group">
        {expenses.map((expense) => (
          <li key={expense.id} className="list-group-item">
            <strong>{expense.title}</strong>: ${expense.amount} ({expense.date})
          </li>
        ))}
      </ul>

      {/* Display total spent by each person */}
      <div className="mt-3">
        <h4>Total Spent by Each Person</h4>
        <ul className="list-group">
          {Object.keys(totalSpentByPerson).map((person) => (
            <li key={person} className="list-group-item">
              {person}: ${totalSpentByPerson[person].toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
