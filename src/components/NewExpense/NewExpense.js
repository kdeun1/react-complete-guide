import { useState } from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  const [isEdit, setIsEdit] = useState(false);

  const saveExpenseDataHandler = data => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    console.log(`NewExpense.js / expenseData : ${expenseData}`);
    props.onAddExpense(expenseData);
    setIsEdit(false);
  };

  const editHandler = isEdit => () => {
    setIsEdit(isEdit);
  };

  return (
    <div className="new-expense">
      {!isEdit ? (
        <button onClick={editHandler(true)}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={editHandler(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;
