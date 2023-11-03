import './ExpenseItem.css';

const ExpenseItem = (data) => {
    const year = data.date.getFullYear();
    const month = data.date.toLocaleString('en-US', {month: 'long'})
    const day = data.date.toLocaleString('en-US', {day: '2-digit'})

    return (
        <div className="expense-item">
        <div>
            <div>{year}</div>
            <div>{month}</div>
            <div>{day}</div>
        </div>
        <div className="expense-item__description">
            <h2>{data.title}</h2>
        </div>
        <div className="expense-item__price">{data.amount}</div>
        </div>
    );
};

export default ExpenseItem;
