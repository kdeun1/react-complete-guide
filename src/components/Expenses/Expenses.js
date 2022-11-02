import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
