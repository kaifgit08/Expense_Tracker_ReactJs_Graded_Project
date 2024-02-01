import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddExpense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const history = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();

    if (
      selectedDate.getMonth() < currentDate.getMonth() ||
      selectedDate.getFullYear() < currentDate.getFullYear()
    ) {
      alert("Please select a date from the current month or a future date.");
      setDate("");
    } else {
      setDate(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple form validation
    if (!title || !amount || !date) {
      alert("Please fill in all fields.");
      return;
    }

    const newExpense = {
      title,
      amount,
      date,
    };

    try {
      // Push data to json-server using axios
      await axios.post("http://localhost:3000/expenses", newExpense);

      // Redirect to home page after adding expense
      history.push("/");
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        {/* Title input */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Expense Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>

        {/* Amount input */}
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Expense Amount:
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>

        {/* Date input */}
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Expense Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
