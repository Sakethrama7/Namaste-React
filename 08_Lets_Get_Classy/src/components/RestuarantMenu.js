import { useEffect } from "react";
// To fetch the live data through an API we use useEffect() hook.

import mockMenuData from "../utils/mockMenuData";
import { useParams } from "react-router-dom";

const RestuarantMenu = () => {
  const { resId } = useParams();
  const menu = mockMenuData[resId] || mockMenuData["1"]; // fallback to first

  return (
    <div className="menu">
      <h1>{menu.name}</h1>
      <h4>{menu.cuisines.join(", ")}</h4>
      <h4>
        {menu.costForTwo} • ⭐ {menu.avgRating}
      </h4>
      <h2>Menu</h2>
      <ul>
        {menu.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestuarantMenu;
