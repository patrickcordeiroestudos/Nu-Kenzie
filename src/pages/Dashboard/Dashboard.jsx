import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import "./style.css";

function Dashboard({
  sethomeButton,
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
  balance,
  setBalance,
}) {
  return (
    <>
      <Header sethomeButton={sethomeButton} />
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
          balance={balance}
          setBalance={setBalance}
        />
      </main>
    </>
  );
}

export default Dashboard;
