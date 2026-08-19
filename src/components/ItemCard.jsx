import "./ItemCard.css";

const ItemCard = () => {
  return (
    <div id="item-card" className="item-card">
      <img
        id="item-pic"
        className="item-pic"
        src="../src/images/TV.jpg"
        alt="Picture of item."
      />
      <h2>TV</h2>
    </div>
  );
};

export default ItemCard;
