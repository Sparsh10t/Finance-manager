import { useState } from "react";
import { useFinance } from "../context/FinanceContext";

const TransactionForm = () => {

  const { addTransaction } = useFinance();

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("expense"); // income or expense

  const submit = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const finalAmount =
      type === "expense"
        ? -Math.abs(amount)
        : Math.abs(amount);

    addTransaction({
      text,
      amount: finalAmount,
      category,
    });

    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={submit}>

      <input
        placeholder="Title"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
      />

      {/* Type Selection */}

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>


      {/* Category */}

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Salary</option>
        <option>Other</option>
      </select>

      <button>Add</button>

    </form>
  );
};

export default TransactionForm;
