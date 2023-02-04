import ContainerBannerInfo from "../../components/ContainerBannerInfo/ContainerBannerInfo";
import ContainerIndexInfo from "../../components/ContainerIndexInfo/ContainerIndexInfo";

import "./style.css";

function Homepage({ sethomeButton }) {
  return (
    <main className="main">
      <ContainerIndexInfo sethomeButton={sethomeButton} />
      <ContainerBannerInfo />
    </main>
  );
}

export default Homepage;
