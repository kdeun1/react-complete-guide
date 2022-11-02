import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = props => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    console.log(`Expenses.js / selectedYear : ${selectedYear}`);
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    if (filterYear === 'all') {
      return expense;
    }
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>NO DATA</p>;
  if (filteredExpenses.length) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
