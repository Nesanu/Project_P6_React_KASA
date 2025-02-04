import { Title } from "../../components/titleComponent/Title";
import "./style.scss";
import { CounterTitle } from "../../components/counter/CounterTitle";
import Header from "../../components/layoutsComponents/header/Header";
import Footer from '../../components/layoutsComponents/footer/Footer';

export function Home() {
  return (
    <>
      <Header />
      <h2>Welcome to Home Page</h2>
      <Title />
      <CounterTitle valeurTitre="Essai" class='active'/>
      <Footer />
    </>
  );
}



