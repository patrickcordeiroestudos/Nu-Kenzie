import "./style.css";

function Form({ listTransactions, setListTransactions, saldo, setSaldo }) {
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        setListTransactions([
          ...listTransactions,
          {
            description: event.target[0].value,
            value: Number(event.target[1].value),
            type: event.target[2].value,
          },
        ]);
        event.target[2].value === "Saída"
          ? setSaldo(saldo - Number(event.target[1].value))
          : setSaldo(saldo + Number(event.target[1].value));
      }}
    >
      <label htmlFor="">Descrição</label>
      <input type="text" placeholder="Digite aqui sua descrição" required />
      <div className="container-form">
        <div>
          <label htmlFor="">Valor</label>
          <input type="text" placeholder="1 R$" required />
        </div>
        <div>
          <label htmlFor="">Tipo de Valor</label>
          <select name="" id="" required>
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
