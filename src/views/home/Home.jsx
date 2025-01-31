import { Title } from "../../components/titleComponent/Title";
import "./style.css";
import { CounterTitle } from "../../components/counter/CounterTitle";

export function Home() {
  return (
    <>
      <h2>Welcome to Home Page</h2>
      <Title />
      <CounterTitle valeurTitre="Essai" class='active'/>
    </>
  );
}
