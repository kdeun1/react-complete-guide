import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
  { id: "a1", title: "새우깡", amount: 1300, date: new Date(2021, 10, 22) },
  { id: "a2", title: "그래놀라", amount: 16800, date: new Date(2022, 1, 21) },
  { id: "a3", title: "별뽀빠이", amount: 12240, date: new Date(2022, 5, 2) },
  { id: "a4", title: "누네띠네", amount: 13620, date: new Date(2023, 3, 11) },
  { id: "a5", title: "고구마깡", amount: 1200, date: new Date(2020, 11, 7) },
  { id: "a6", title: "맛동산", amount: 1500, date: new Date(2020, 1, 1) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(`in App.js / expense : ${expense}`);

    /* 이 방식보다 이전 값의 스냅샷을 가져오는 방식을 사용해보자
    setExpenses([
      expense,
      ...expenses,
    ]);
    */

    // 동일한 상태의 이전 스냅샷을 기반으로 state를 업데이트할 수 있는 깔끔한 방법이다.
    setExpenses((prevExpenses) => ([
      expense,
      ...prevExpenses,
    ]));
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses }),
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
