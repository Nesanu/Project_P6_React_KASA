import "./Title.scss";
import KasaImg from "../../assets/images/background-images/about-intro.png";

export function Title() {
  return (
    <>
      <h1 className="title">KASA</h1>
      <img src={KasaImg} alt="" />
    </>
  );
}
