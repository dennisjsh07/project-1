import './ExpenseItem.css';

const ExpenseItem = () => {
    const expenseDate = new Date(2023, 11, 3);
    const expenseTitle = 'rent';
    const expenseAmount = 17500;
    return (
        <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
        </div>
        <div className="expense-item__price">{expenseAmount}</div>
        </div>
    );
};

export default ExpenseItem;
