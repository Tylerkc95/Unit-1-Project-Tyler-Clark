import "./ItemCard.css";

const ItemCard = ({ item, setOverlayMenuData }) => {
  return (
    <div
      id={`${item.name}-card`}
      className="item-card"
      onClick={() =>
        setOverlayMenuData((prevData) => ({
          ...prevData,
          menuVisibility: true,
          menuType: "item-details",
          menuItem: item,
        }))
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
