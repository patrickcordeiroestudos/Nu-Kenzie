import "./style.css";

function ContainerIndexInfo({ setBotaoIniciar }) {
  return (
    <section className="index-info">
      <figure className="logo">
        <img src="./img/nukenzie.png" alt="" />
      </figure>

      <h3 className="title-info">Centralize o controle das suas finanças</h3>

      <p className="text-info">de forma rápida e segura</p>

      <button className="button-inicial" onClick={() => setBotaoIniciar(true)}>
        Iniciar
      </button>
    </section>
  );
}

export default ContainerIndexInfo;
