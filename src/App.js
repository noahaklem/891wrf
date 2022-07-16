import "./styles.css";
import data from "../data/data";
import Card from "./card.js";

export default function App() {
  const cardData = data.map((data) => (
    <Card
      header={data.header}
      secondLine={data.secondLine}
      price={data.price}
      description={data.description}
      information={data.information}
      link={data.link}
    />
  ));

  return <section>{cardData}</section>;
}
