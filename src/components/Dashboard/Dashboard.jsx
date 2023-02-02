import Header from "../Header/Header";
import Main from "../Main/Main";
import "./style.css";

function Dashboard({ setBotaoIniciar, listTransactions, setListTransactions }) {
  return (
    <>
      <Header setBotaoIniciar={setBotaoIniciar} />
      <main className="main-dashboard">
        <Main
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </main>
    </>
  );
}

export default Dashboard;
