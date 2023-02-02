import { useState } from "react";
import PaginaInicial from "./components/PaginaInicial/PaginaInicial";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [botaoIniciar, setBotaoIniciar] = useState(false);

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
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </div>
      )}
    </>
  );
}

export default App;
