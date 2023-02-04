import "./style.css";

function Header({ sethomeButton }) {
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
            className="header-button"
            onClick={() => sethomeButton(false)}
          >
            Inicio
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
