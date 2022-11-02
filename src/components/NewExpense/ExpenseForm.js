import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
  /*
    // 첫번째 방법 - state 각자 선언하기 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    */

  /*
    // 두번째 방법 - state를 객체로 만들어 변수 하나로 합치기
    const [enteredInput, setEnteredInput] = useState({
        title: '',
        amount: 0,
        date: '',
    });
    const titleChangeHandler = (event) => {
        setEnteredInput({
            ...enteredInput,
            title: event.target.value,
        });
    };
    const amountChangeHandler = (event) => {
        setEnteredInput({
            ...enteredInput,
            amount: event.target.value,
        });
    };
    const dateChangeHandler = (event) => {
        setEnteredInput({
            ...enteredInput,
            date: event.target.value,
        });
    };
    */

  // 세번째 방법 - 이전 state를 활용하여 업데이트하기
  const [enteredInput, setEnteredInput] = useState({
    title: '',
    amount: 0,
    date: '',
  });
  const titleChangeHandler = e => {
    setEnteredInput(prevState => ({
      ...prevState,
      title: e.target.value,
    }));
  };
  const amountChangeHandler = e => {
    setEnteredInput(prevState => ({
      ...prevState,
      amount: e.target.value,
    }));
  };
  const dateChangeHandler = e => {
    setEnteredInput(prevState => ({
      ...prevState,
      date: e.target.value,
    }));
  };

  const submitHandler = e => {
    e.preventDefault();
    const expenseData = {
      title: enteredInput.title,
      amount: +enteredInput.amount,
      date: new Date(enteredInput.date),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredInput({
      title: '',
      amount: 0,
      date: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
