import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

import { useState } from 'react';

function NewExpense(props) {
    const saveExpenseData = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        }

        props.onSaveExpense(expenseData);
    }

    let [isFromVisible, updateFromVisibility] = useState(false);

    const showForm = () => {
        updateFromVisibility(true);
    }
    const hideForm = () => {
        updateFromVisibility(false);
    }

    const addNewExpenseButton = <button onClick={showForm}>Add New Expense</button>

    return (
        <div className="new-expense">
            {!isFromVisible && addNewExpenseButton}
            {isFromVisible && <ExpenseForm onSaveExpenseData={saveExpenseData} onHideForm={hideForm}/>}
        </div>
    )
}

export default NewExpense;