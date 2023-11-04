import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";

const Expenses = (props)=>{

    return (
        <Card className="App">
            {props.expenses.map((i) => (
            <ExpenseItem
            key={i.id} // Make sure to add a unique key when mapping in React
            title={i.title}
            amount={i.amount}
            date={i.date}
            />
        ))}
        </Card >
    );
}

export default Expenses;