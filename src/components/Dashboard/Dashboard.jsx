import Header from "../Header/Header";
import Main from "../Main/Main";
import "./style.css";

function Dashboard({
  setBotaoIniciar,
  listOfEntries,
  setListOfEntries,
  listOfExits,
  setListOfExits,
  listOfAllTransactions,
  setlistOfAllTransactions,
  isEntry,
  setIsEntry,
  isExit,
  setIsExit,
  isAllTransactions,
  setIsAllTransactions,
  saldo,
  setSaldo,
}) {
  return (
    <>
      <Header setBotaoIniciar={setBotaoIniciar} />
      <main className="main-dashboard">
        <Main
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
      </main>
    </>
  );
}

export default Dashboard;
