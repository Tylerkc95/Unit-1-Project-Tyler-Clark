import { useState } from "react";

const ListViewContainer = ({ setOverlayMenuData, itemData }) => {
  const [listView, setListView] = useState("all-items");

  return (
    <div>
      <span>{listView}</span>
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
        {itemData.map((item, index) => (
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
      </div>
    </div>
  );
};

export default ListViewContainer;
