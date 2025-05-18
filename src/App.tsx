import { useState } from "react";
import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 5, category: "personal" },
    { id: 2, description: "butter", amount: 5, category: "personal" },
    { id: 3, description: "egg", amount: 5, category: "personal" },
    { id: 4, description: "carrot", amount: 5, category: "personal" },
  ]);

  return (
    <>
      <div>
        <ExpenseList
          expenses={expenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
}

export default App;
