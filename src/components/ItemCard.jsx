import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div id={`${item.name}-card`} className="item-card">
      <img
        id={`${item.name}-pic`}
        className="item-pic"
        src={`../src/images/${item.image}.jpg`}
        alt={`Picture of ${item.name}.`}
      />
      <h2>{item.name}</h2>
    </div>
  );
};

export default ItemCard;
