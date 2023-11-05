import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');

    const TitleChangeHandler = (e)=>{
        // console.log(e.target.value);
        setEnteredTitle(e.target.value);
    }

    const amountChangeHandler = (e)=>{
        // console.log(e.target.value);
        setEnteredAmount(e.target.value);
    }

    const dateChangeHandler = (e)=>{
        // console.log(e.target.value);
        setEnteredDate(e.target.value);
    }

    const submitHandler = (e)=>{
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enterdDate,
        }

        // console.log(expenseData);
        props.newExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={TitleChangeHandler}/>
                </div> 
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2023-12-31" value={enterdDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>
                    Add Expense
                </button>
            </div>
        </form>
    )
}

export default ExpenseForm;