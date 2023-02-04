import "./style.css";

function Card({ transaction, id, removeCard }) {
  return (
    <div
      className={transaction.type !== "Entrada" ? "card-saida" : "card-entrada"}
      id={id}
    >
      <div className="card1">
        <h3 className="card-title">{transaction.description}</h3>
        <p className="card-type">{transaction.type}</p>
      </div>
      <div className="card2">
        <p className="card-value">
          {Number(transaction.value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <img
          src="./img/ButtonTrash.png"
          alt=""
          className={
            transaction.type !== "Entrada" ? " trash saida" : "trash entrada"
          }
          id={id}
          onClick={(event) => removeCard(event.target)}
        />
      </div>
    </div>
  );
}

export default Card;
