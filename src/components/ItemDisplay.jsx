import ItemCard from "./ItemCard";
import "./ItemCard.css";
import "../pages/Dashboard.css";

const ItemDisplay = ({ setOverlayMenuData, itemData, viewBy, displayType }) => {
  // Creates an array of the unique options for each item attribute (ie project, tag, etc.)
  const listOptions = (attribute) =>
    itemData.reduce((optionsList, item) => {
      const option = item[attribute];
      !optionsList.includes(option) && optionsList.push(option);
      return optionsList;
    }, []);

  // Small child components used throughout this parent component
  const CardHeader = ({ option }) => {
    return (
      <div className="card-header">
        {option === "" ? `No ${viewBy} assigned` : option}
      </div>
    );
  };

  const ListHeader = ({ option, onClick }) => {
    return (
      <h3 onClick={onClick}>
        {option === "" ? `No ${viewBy} assigned` : option}
      </h3>
    );
  };

  const ListItem = ({ item, onClick }) => {
    return (
      <li className="list-item" onClick={onClick}>
        {item.name}
      </li>
    );
  };

  // These variables determine how to display the data; in list form or card form
  const itemContainerClass =
    displayType === "list" ? "list-container" : "card-container";
  const groupContainerClass =
    displayType === "list" ? "list-groupings" : "card-groupings";
  // Using Pascal Case when naming variables allows you to use them as components or custom HTML tags
  const CategoryElement = displayType === "list" ? ListHeader : CardHeader;
  const ItemElement = displayType === "list" ? ListItem : ItemCard;

  if (viewBy === "all-items") {
    return (
      <div className={itemContainerClass}>
        {itemData.map((item, index) => (
          <ItemElement
            key={item.name + index}
            item={item}
            onClick={() =>
              setOverlayMenuData((prevData) => ({
                ...prevData,
                menuVisibility: true,
                menuType: "item-details",
                menuItem: item,
              }))
            }
          >
            {item.name}
          </ItemElement>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {listOptions(viewBy).map((option, index) => (
          <div key={option + index} className={groupContainerClass}>
            <CategoryElement option={option} />
            <ul className={itemContainerClass}>
              {itemData
                .filter((item) => item[viewBy] === option)
                .map((item, index) => (
                  <ItemElement
                    key={item.name + index}
                    item={item}
                    onClick={() =>
                      setOverlayMenuData((prevData) => ({
                        ...prevData,
                        menuVisibility: true,
                        menuType: "item-details",
                        menuItem: item,
                      }))
                    }
                  ></ItemElement>
                ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
};
export default ItemDisplay;
