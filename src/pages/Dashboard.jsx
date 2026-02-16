import { useState } from "react";
import { useFinance } from "../context/FinanceContext";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Filter from "../components/Filter";
import Charts from "../components/Charts";

import { FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";

const Dashboard = () => {

  const { transactions } = useFinance();
  const [filter, setFilter] = useState("all");

  /* ===== TOTAL SUMMARY ===== */

  const total = transactions.reduce((acc, t) => acc + t.amount, 0);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);


  /* ===== MONTHLY SUMMARY ===== */

  const thisMonth = new Date().getMonth();

  const monthlyTransactions = transactions.filter(
    (t) => new Date(t.date).getMonth() === thisMonth
  );

  const monthlyIncome = monthlyTransactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const monthlyExpense = monthlyTransactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);


  return (
    <div className="dashboard">

      <h1>Dashboard</h1>


      {/* ===== SUMMARY CARDS ===== */}

      <div className="summary">

        <div className="summary-card">
          <FaWallet className="sum-icon" />
          <h3>Total Balance</h3>
          <p>₹{total}</p>
        </div>

        <div className="summary-card income">
          <FaArrowUp className="sum-icon" />
          <h3>Income</h3>
          <p>₹{income}</p>
        </div>

        <div className="summary-card expense">
          <FaArrowDown className="sum-icon" />
          <h3>Expenses</h3>
          <p>₹{expense}</p>
        </div>

      </div>


      {/* ===== MONTHLY SUMMARY ===== */}

      <div className="dashboard-card">

        <h2>Monthly Summary</h2>

        <p>Income: ₹{monthlyIncome}</p>
        <p>Expense: ₹{monthlyExpense}</p>

      </div>


      {/* ===== ADD TRANSACTION ===== */}

      <div className="dashboard-card">
        <h2>Add Transaction</h2>
        <TransactionForm />
      </div>


      {/* ===== FILTER ===== */}

      <Filter setFilter={setFilter} />


      {/* ===== TRANSACTIONS ===== */}

      <div className="dashboard-card">
        <h2>Recent Transactions</h2>
        <TransactionList filter={filter} />
      </div>


      {/* ===== CHARTS ===== */}

      <div className="dashboard-card">
        <h2>Analytics</h2>
        <Charts />
      </div>


    </div>
  );
};

export default Dashboard;
