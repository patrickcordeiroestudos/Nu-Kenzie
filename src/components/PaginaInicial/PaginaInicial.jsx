import ContainerBannerInfo from "../ContainerBannerInfo/ContainerBannerInfo";
import ContainerIndexInfo from "../ContainerIndexInfo/ContainerIndexInfo";

import "./style.css";

function PaginaInicial({ setBotaoIniciar }) {
  return (
    <main className="main">
      <ContainerIndexInfo setBotaoIniciar={setBotaoIniciar} />
      <ContainerBannerInfo />
    </main>
  );
}

export default PaginaInicial;
