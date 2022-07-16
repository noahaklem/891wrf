export default function Card({
  header,
  secondLine,
  price,
  description,
  information,
  link
}) {
  return (
    <div>
      <p>{header}</p>
      <p>{secondLine}</p>
      <p>{price}</p>
      <p>{description}</p>
      <ul>
        {information.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <button>Add to Cart</button>
      <a href={link} target="_blank">
        View all Channels
      </a>
    </div>
  );
}
