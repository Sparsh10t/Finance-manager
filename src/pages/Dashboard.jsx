import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFinance } from "../context/FinanceContext";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Filter from "../components/Filter";
import Charts from "../components/Charts";

const Dashboard = () => {

  const navigate = useNavigate();
  const { transactions } = useFinance();

  const [filter, setFilter] = useState("all");

  /* ===== PROTECT ROUTE ===== */

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);


  /* ===== TOTAL ===== */

  const total = transactions.reduce((acc, t) => acc + t.amount, 0);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);


  return (
    <div className="dashboard">

      <h1>Dashboard</h1>


      {/* SUMMARY */}

      <div className="summary">

        <div className="summary-card">
          <h3>Total Balance</h3>
          <p>₹{total}</p>
        </div>

        <div className="summary-card income">
          <h3>Income</h3>
          <p>₹{income}</p>
        </div>

        <div className="summary-card expense">
          <h3>Expense</h3>
          <p>₹{expense}</p>
        </div>

      </div>


      {/* ADD TRANSACTION */}

      <div className="dashboard-card">
        <h2>Add Transaction</h2>
        <TransactionForm />
      </div>


      {/* FILTER */}

      <Filter setFilter={setFilter} />


      {/* TRANSACTIONS */}

      <div className="dashboard-card">
        <h2>Transactions</h2>
        <TransactionList filter={filter} />
      </div>


      {/* CHARTS */}

      <div className="dashboard-card">
        <h2>Analytics</h2>
        <Charts />
      </div>

    </div>
  );
};

export default Dashboard;
