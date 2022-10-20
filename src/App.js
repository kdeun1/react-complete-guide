import Expenses from "./components/Expenses";
import "./App.css";

function App() {
  const expenses = [
    { id: "a1", title: "새우깡", amount: 1300, date: new Date(2021, 10, 22) },
    { id: "a2", title: "그래놀라", amount: 16800, date: new Date(2022, 1, 21) },
    { id: "a3", title: "별뽀빠이", amount: 12240, date: new Date(2022, 5, 2) },
    { id: "a4", title: "누네띠네", amount: 13620, date: new Date(2023, 3, 11) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
