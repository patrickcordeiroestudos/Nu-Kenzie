import "./style.css";

function Header({ setBotaoIniciar }) {
  return (
    <header className="header">
      <div className="container-header">
        <div>
          <figure className="logo">
            <img src="./img/nukenzieblack.png" alt="" />
          </figure>
        </div>
        <div>
          <button
            className="button-iniciar"
            onClick={() => setBotaoIniciar(false)}
          >
            Inicio
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
