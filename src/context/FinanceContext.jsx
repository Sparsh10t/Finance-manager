import { createContext, useContext, useState, useEffect } from "react";

const FinanceContext = createContext();

export const useFinance = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

 const addTransaction = (data) => {
  setTransactions([
    ...transactions,
    {
      id: Date.now(),
      text: data.text,
      amount: Number(data.amount),
      category: data.category,
      date: new Date().toISOString(),
    },
  ]);
};


  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <FinanceContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
