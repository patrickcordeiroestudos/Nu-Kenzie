import "./style.css";

function ContainerIndexInfo({ sethomeButton }) {
  return (
    <section className="index-info">
      <figure className="logo">
        <img src="./img/nukenzie.png" alt="logo nukenzie" />
      </figure>

      <h3 className="title-info">Centralize o controle das suas finanças</h3>

      <p className="text-info">de forma rápida e segura</p>

      <button className="home-button" onClick={() => sethomeButton(true)}>
        Iniciar
      </button>
    </section>
  );
}

export default ContainerIndexInfo;
