import ItemCard from "./ItemCard";
import "./ItemCard.css";

const ItemDisplay = ({
  setOverlayMenuData,
  itemData,
  viewBy,
  viewType,
}) => {
  // Creates an array of the unique options for each item attribute (ie project, tag, etc.)
  const listOptions = (attribute) =>
    itemData.reduce((optionsList, item) => {
      const option = item[attribute];
      !optionsList.includes(option) && optionsList.push(option);
      return optionsList;
    }, []);

  // Small child components used throughout this parent component
  const CardHeader = ({ option }) => {
    return <div>{option}</div>;
  };

  const ListHeader = ({ option, onClick }) => {
    return <h3 onClick={onClick}>{option}</h3>;
  };

  const ListItem = ({ item, onClick }) => {
    return <li onClick={onClick}>{item.name}</li>;
  };

  // Using Pascal Case when naming variables allows you to use them as components or custom HTML tags
  // These variables determine how to display the data; in list form or card form
  const CategoryElement = viewType === "list" ? ListHeader : CardHeader;
  const ItemElement = viewType === "list" ? ListItem : ItemCard;

  return (
    <div>
      <div>
        {viewBy === "all-items"
          ? itemData.map((item, index) => (
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
            ))
          : listOptions(viewBy).map((option, index) => (
              <div key={option + index}>
                <CategoryElement
                  option={option}
                  onClick={() =>
                    console.log(`Clicking ${option} doesn't do anything yet!`)
                  }
                />
                <ul>
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
                      />
                    ))}
                </ul>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ItemDisplay;
