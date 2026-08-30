import { useState } from "react";

const ListViewContainer = ({ setOverlayMenuData, itemData }) => {
  const [listView, setListView] = useState("all-items");

  const listOptions = (attribute) =>
    itemData.reduce((optionsList, item) => {
      const option = item[attribute];
      !optionsList.includes(option) && optionsList.push(option);
      return optionsList;
    }, []);

  return (
    <div>
      <span>View by:</span>
      <select
        id="view-by-dropdown"
        onChange={(e) => {
          setListView(e.target.value);
        }}
      >
        <option value="all-items">All Items</option>
        <option value="project">Project</option>
        <option value="tag">Tag</option>
        <option value="action">Action</option>
        <option value="progress">Progress</option>
      </select>
      <div id="list-view-dropdown">
        {listView === "all-items"
          ? itemData.map((item, index) => (
              <li
                key={item.name + index}
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
              </li>
            ))
          : listOptions(listView).map((option, index) => (
              <div key={option + index}>
                <h3>{option}</h3>
                <ul>
                  {itemData
                    .filter((item) => item[listView] === option)
                    .map((item, index) => (
                      <li
                        key={item.name + index}
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
                      </li>
                    ))}
                </ul>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ListViewContainer;
