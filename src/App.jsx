import { useState, useEffect } from "react";
import PaginaInicial from "./components/PaginaInicial/PaginaInicial";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  // const [listTransactions, setListTransactions] = useState([]);
  const [listOfEntries, setListOfEntries] = useState([]);
  const [listOfExits, setListOfExits] = useState([]);
  const [listOfAllTransactions, setlistOfAllTransactions] = useState([]);
  const [botaoIniciar, setBotaoIniciar] = useState(false);
  const [isEntry, setIsEntry] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [isAllTransactions, setIsAllTransactions] = useState(true);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    setlistOfAllTransactions([...listOfEntries, ...listOfExits]);
  }, [listOfEntries, listOfExits]);

  return (
    <>
      {botaoIniciar === false ? (
        <div className="pagina-inicial">
          <PaginaInicial setBotaoIniciar={setBotaoIniciar} />
        </div>
      ) : (
        <div className="dashboard">
          <Dashboard
            setBotaoIniciar={setBotaoIniciar}
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
            saldo={saldo}
            setSaldo={setSaldo}
          />
        </div>
      )}
    </>
  );
}

export default App;
