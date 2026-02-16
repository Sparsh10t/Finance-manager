import { useFinance } from "../context/FinanceContext";

const TransactionList = ({ filter }) => {

  const { transactions, deleteTransaction } = useFinance();

  /* ===== FILTER LOGIC ===== */

  const filteredTransactions = transactions.filter((t) => {

    if (filter === "income") return t.amount > 0;
    if (filter === "expense") return t.amount < 0;

    return true;
  });


  /* ===== EMPTY STATE ===== */

  if (filteredTransactions.length === 0) {
    return (
      <div className="dashboard-card">
        <p style={{ textAlign: "center" }}>
          No transactions found.
        </p>
      </div>
    );
  }


  /* ===== TRANSACTION LIST ===== */

  return (
    <div>

      {filteredTransactions.map((t) => (

        <div key={t.id} className="card">

          {/* LEFT SIDE */}

          <div>

            <span style={{ fontWeight: "bold" }}>
              {t.text}
            </span>

            <br />

            <small style={{ color: "#666" }}>
              {t.category}
            </small>

          </div>


          {/* RIGHT SIDE */}

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

            {/* AMOUNT */}

            <span
              style={{
                color: t.amount > 0 ? "green" : "red",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              {t.amount > 0 ? "+" : "-"}₹{Math.abs(t.amount)}
            </span>


            {/* DELETE BUTTON */}

            <button
              onClick={() => deleteTransaction(t.id)}
              style={{
                background: "#ff4d4d",
                border: "none",
                color: "white",
                padding: "6px 10px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              ❌
            </button>

          </div>

        </div>

      ))}

    </div>
  );
};

export default TransactionList;
