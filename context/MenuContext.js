import { createContext } from "react";
import items from ".././lib/items";
import { useState } from "react";

const MenuContext = createContext();
const [menuItems, setMenuItems] = useState(items);
const newItems = items.filter((item) => item.category === category);
setMenuItems(newItems);
const MenuProvider = ({ children }) => {
  const data = { menuItems };
  return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>;
};

export default MenuContext;
export { MenuProvider };
