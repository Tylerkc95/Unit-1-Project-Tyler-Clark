import "./ItemCard.css";

const ItemCard = ({ item, onClick }) => {
  return (
    <div id={`${item.name}-card`} className="item-card" onClick={onClick}>
      <img
        id={`${item.name}-pic`}
        className="item-pic"
        src={item.image}
        alt={`Picture of ${item.name}.`}
      />
      <h2>{item.name}</h2>
    </div>
  );
};

export default ItemCard;
