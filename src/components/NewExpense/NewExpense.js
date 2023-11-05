import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props)=>{
    const newExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm newExpenseData={newExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;