import Card from "../Card/card";
import Form from "../Form/Form";
import "./style.css";

function Main({
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
  setIsAllTransactions,
  balance,
  setBalance,
}) {
  function removeCard(event) {
    const isCardExit = event.classList.contains("saida");

    if (isCardExit) {
      let cardToExit = listOfExits.find(
        (elem) => elem.description === event.id
      );

      let newListOfExits = listOfExits.filter((elem) => {
        return elem.description !== event.id;
      });

      setListOfExits([...newListOfExits]);
      setBalance(balance + Number(cardToExit.value));
    } else {
      let cardEntry = listOfEntries.find(
        (elem) => elem.description === event.id
      );

      let newListOfEntries = listOfEntries.filter((elem) => {
        return elem.description !== event.id;
      });
      setListOfEntries([...newListOfEntries]);
      setBalance(balance - Number(cardEntry.value));
    }
  }

  function filterAll() {
    setIsAllTransactions(true);
    setIsEntry(false);
    setIsExit(false);
  }

  function filterEntries() {
    setIsEntry(true);
    setIsExit(false);
    setIsAllTransactions(false);
  }

  function filterExits() {
    setIsExit(true);
    setIsEntry(false);
    setIsAllTransactions(false);
  }

  function renderCardsByFilters() {
    if (isEntry) {
      if (listOfEntries.length === 0) {
        return (
          <>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <div>
              <img src="./img/NoCard.png" alt="" />
            </div>
          </>
        );
      } else {
        return listOfEntries.map((transaction, index) => {
          return (
            <Card
              transaction={transaction}
              key={index}
              id={transaction.description}
              removeCard={removeCard}
            />
          );
        });
      }
    } else if (isExit) {
      if (listOfExits.length === 0) {
        return (
          <>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <div>
              <img src="./img/NoCard.png" alt="" />
            </div>
          </>
        );
      } else {
        return listOfExits.map((transaction, index) => {
          return (
            <Card
              transaction={transaction}
              key={index}
              id={transaction.description}
              removeCard={removeCard}
            />
          );
        });
      }
    } else {
      if (listOfAllTransactions.length === 0) {
        return (
          <>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <div>
              <img src="./img/NoCard.png" alt="" />
            </div>
          </>
        );
      } else {
        return listOfAllTransactions.map((transaction, index) => {
          return (
            <Card
              transaction={transaction}
              key={index}
              id={transaction.description}
              removeCard={removeCard}
            />
          );
        });
      }
    }
  }

  return (
    <>
      <section className="section-form">
        <Form
          setIsAllTransactions={setIsAllTransactions}
          setIsEntry={setIsEntry}
          setIsExit={setIsExit}
          listOfEntries={listOfEntries}
          setListOfEntries={setListOfEntries}
          listOfExits={listOfExits}
          setListOfExits={setListOfExits}
          listOfAllTransactions={listOfAllTransactions}
          setlistOfAllTransactions={setlistOfAllTransactions}
          balance={balance}
          setBalance={setBalance}
        />
        {listOfAllTransactions.length !== 0 && (
          <div className="card-total">
            <div>
              <h3>Valor Total:</h3>
              <p>O valor se refere ao saldo total da conta</p>
            </div>
            <span>
              {balance.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        )}
      </section>
      <section className="section-info">
        <div className="filters">
          <h4>Resumo Financeiro</h4>
          <div className="buttons-filtros">
            <button
              className="button-filtros"
              onClick={(event) => filterAll(event)}
            >
              Todos
            </button>
            <button className="button-filtros" onClick={() => filterEntries()}>
              Entradas
            </button>
            <button className="button-filtros" onClick={() => filterExits()}>
              Despesas
            </button>
          </div>
        </div>

        {renderCardsByFilters()}
      </section>
    </>
  );
}

export default Main;
