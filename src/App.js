import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: 1, title: "rent", amount: 17500, date: new Date(2023, 11, 3) },
    { id: 2, title: "food", amount: 5000, date: new Date(2023, 11, 3) },
    { id: 3, title: "gym", amount: 1000, date: new Date(2023, 11, 3) },
    { id: 4, title: "water", amount: 500, date: new Date(2023, 11, 3) },
  ];
  return (
    <Expenses items={expenses}/>
  );
}

export default App;
