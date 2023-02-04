import { useState, useEffect } from "react";
import HomePage from "./pages/Homepage/Homepage";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  const [listOfEntries, setListOfEntries] = useState([]);
  const [listOfExits, setListOfExits] = useState([]);
  const [listOfAllTransactions, setlistOfAllTransactions] = useState([]);
  const [homeButton, sethomeButton] = useState(false);
  const [isEntry, setIsEntry] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [isAllTransactions, setIsAllTransactions] = useState(true);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setlistOfAllTransactions([...listOfEntries, ...listOfExits]);
  }, [listOfEntries, listOfExits]);

  return (
    <>
      {homeButton === false ? (
        <div className="homepage">
          <HomePage sethomeButton={sethomeButton} />
        </div>
      ) : (
        <div className="dashboard">
          <Dashboard
            sethomeButton={sethomeButton}
            listOfEntries={listOfEntries}
            setListOfEntries={setListOfEntries}
            listOfExits={listOfExits}
            setListOfExits={setListOfExits}
            listOfAllTransactions={listOfAllTransactions}
            setlistOfAllTransactions={setlistOfAllTransactions}
            isEntry={isEntry}
            setIsEntry={setIsEntry}
            isExit={isExit}
            setIsExit={setIsExit}
            isAllTransactions={isAllTransactions}
            setIsAllTransactions={setIsAllTransactions}
            balance={balance}
            setBalance={setBalance}
          />
        </div>
      )}
    </>
  );
}

export default App;
