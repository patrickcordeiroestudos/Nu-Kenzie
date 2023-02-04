import "./style.css";

function Form({
  listOfEntries,
  setListOfEntries,
  listOfExits,
  setListOfExits,
  balance,
  setBalance,
  setIsAllTransactions,
  setIsEntry,
  setIsExit,
}) {
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();

        const descriptionTransaction = document.querySelector(
          "#description-transaction"
        ).value;
        const valueTransaction =
          document.querySelector("#value-transaction").value;
        const typeTransaction =
          document.querySelector("#type-transaction").value;

        if (typeTransaction === "Entrada") {
          setListOfEntries([
            ...listOfEntries,
            {
              description: descriptionTransaction,
              value: valueTransaction,
              type: typeTransaction,
            },
          ]);
        } else {
          setListOfExits([
            ...listOfExits,
            {
              description: descriptionTransaction,
              value: valueTransaction,
              type: typeTransaction,
            },
          ]);
        }
        setIsAllTransactions(true);
        setIsEntry(false);
        setIsExit(false);

        typeTransaction === "Saída"
          ? setBalance(balance - Number(valueTransaction))
          : setBalance(balance + Number(valueTransaction));
      }}
    >
      <label htmlFor="">Descrição</label>
      <input
        type="text"
        placeholder="Descreva sua transação"
        required
        id="description-transaction"
      />
      <div className="container-form">
        <div>
          <label htmlFor="">Valor</label>
          <input
            type="text"
            placeholder="1 R$"
            required
            id="value-transaction"
          />
        </div>
        <div>
          <label htmlFor="">Tipo de Valor</label>
          <select name="" id="type-transaction" required>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>

      <button type="submit" className="b-form">
        Inserir valor
      </button>
    </form>
  );
}

export default Form;
