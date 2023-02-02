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
  isAllTransactions,
  setIsAllTransactions,
  saldo,
  setSaldo,
}) {
  function removeCard(event) {
    if (event.classList.contains("saida")) {
      let card = listOfExits.find((elem) => elem.description === event.id);

      let newArray = listOfExits.filter((elem) => {
        return elem.description !== event.id;
      });
      setListOfExits([...newArray]);
      setSaldo(saldo + Number(card.value));
      console.log(newArray);
    } else {
      let card = listOfEntries.find((elem) => elem.description === event.id);

      let newArray = listOfEntries.filter((elem) => {
        return elem.description !== event.id;
      });
      setListOfEntries([...newArray]);
      setSaldo(saldo - Number(card.value));
    }
  }

  function filterAll(event) {
    setIsAllTransactions(true);
    setIsEntry(false);
    setIsExit(false);
  }

  function filterEntradas() {
    setIsEntry(true);
    setIsExit(false);
    setIsAllTransactions(false);
  }

  function filterSaidas() {
    setIsExit(true);
    setIsEntry(false);
    setIsAllTransactions(false);
  }

  const resume = () => {
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
  };

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
          saldo={saldo}
          setSaldo={setSaldo}
        />
        {listOfAllTransactions.length !== 0 && (
          <div className="card-total">
            <div>
              <h3>Valor Total:</h3>
              <p>O valor se refere ao saldo total da conta</p>
            </div>
            <span>
              {saldo.toLocaleString("pt-BR", {
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
            <button className="button-filtros" onClick={() => filterEntradas()}>
              Entradas
            </button>
            <button className="button-filtros" onClick={() => filterSaidas()}>
              Despesas
            </button>
          </div>
        </div>

        {resume()}
      </section>
    </>
  );
}

export default Main;
