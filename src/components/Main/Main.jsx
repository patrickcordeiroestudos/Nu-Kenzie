import Card from "../Card/card";
import Form from "../Form/Form";
import { useState } from "react";
import "./style.css";

function Main({ listTransactions, setListTransactions }) {
  const [saldo, setSaldo] = useState(0);
  const [saveTransaction, setSaveTransaction] = useState("");

  function removeCard(event) {
    let newArray = listTransactions.filter((transaction, index) => {
      return index !== Number(event.id) - 1;
    });
    setListTransactions([...newArray]);
    listTransactions[Number(event.id) - 1].type === "Entrada"
      ? setSaldo(saldo - listTransactions[Number(event.id) - 1].value)
      : setSaldo(saldo + listTransactions[Number(event.id) - 1].value);
  }

  function filterAll(event) {
    setListTransactions(listTransactions);
  }

  function filterEntradas() {
    const entradas = listTransactions.filter((transaction) => {
      return transaction.type === "Entrada";
    });
    setSaveTransaction(listTransactions);
    setListTransactions(entradas);
  }

  function filterSaidas() {
    const saidas = listTransactions.filter((transaction) => {
      return transaction.type === "Saída";
    });
    setSaveTransaction(listTransactions);
    setListTransactions(saidas);
  }

  return (
    <>
      <section className="section-form">
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          saldo={saldo}
          setSaldo={setSaldo}
        />
        {listTransactions.length !== 0 && (
          <div className="card-total">
            <div>
              <h3>Valor Total:</h3>
              <p>O valor se refere ao saldo</p>
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
        {listTransactions.length === 0 ? (
          <>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <div>
              <img src="./img/NoCard.png" alt="" />
            </div>
          </>
        ) : (
          listTransactions.map((transaction, index) => {
            return (
              <Card
                transaction={transaction}
                key={index}
                id={index}
                removeCard={removeCard}
              />
            );
          })
        )}
      </section>
    </>
  );
}

export default Main;
