import "./style.css";

function Form({
  listOfEntries,
  setListOfEntries,
  listOfExits,
  setListOfExits,
  listOfAllTransactions,
  setlistOfAllTransactions,
  saldo,
  setSaldo,
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
        console.log(descriptionTransaction);
        console.log(valueTransaction);
        console.log(typeTransaction);

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

        // if (listOfAllTransactions.length > 0) {
        //   const total = listOfAllTransactions.reduce(
        //     (lastValue, actualValue) => {
        //       return Number(lastValue.value) + Number(actualValue.value);
        //     }
        //   );
        //   console.log(total);
        // }

        event.target[2].value === "Saída"
          ? setSaldo(saldo - Number(event.target[1].value))
          : setSaldo(saldo + Number(event.target[1].value));

        setIsAllTransactions(true);
        setIsEntry(false);
        setIsExit(false);
      }}
    >
      <label htmlFor="">Descrição</label>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
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
