const ExpenseItem = () => {
    const today = new Date();
    return (
        <div>
        <div>{today.getFullYear()}</div>
        <div>
            <h2>Title</h2>
        </div>
        <div>500</div>
        </div>
    );
};

export default ExpenseItem;
