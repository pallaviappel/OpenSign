import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ item, isOpen, closeSidebar }) => {
  return (
    <li key={item.title} role="none">
      <NavLink
        to={
          item.pageType
            ? `/${item.pageType}/${item.objectId}`
            : `/${item.objectId}`
        }
        className={({ isActive }) =>
          `${
            isActive ? "bg-base-300" : ""
          } mx-auto p-3 lg:p-4 flex items-center text-base-content hover:text-base-content hover:bg-base-300 cursor-pointer hover:no-underline`
        }
        onClick={closeSidebar}
        tabIndex={isOpen ? 0 : -1}
        role="menuitem"
      >
        <i className={`${item.icon} text-[18px]`} aria-hidden="true"></i>
        <span className="ml-3 lg:ml-4">{item.title}</span>
      </NavLink>
    </li>
  );
};

export default Menu;
