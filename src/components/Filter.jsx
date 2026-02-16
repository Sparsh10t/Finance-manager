const Filter = ({ setFilter }) => {
  return (
    <div className="filter">

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("income")}>Income</button>
      <button onClick={() => setFilter("expense")}>Expense</button>

    </div>
  );
};

export default Filter;
