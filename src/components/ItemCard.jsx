import "./ItemCard.css";

const ItemCard = ({ item, overlayMenuData, setOverlayMenuData }) => {
  return (
    <div
      id={`${item.name}-card`}
      className="item-card"
      onClick={() =>
        setOverlayMenuData({
          overlayMenuData,
          visibility: true,
          type: "item-details",
          item: item,
        })
      }
    >
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
