import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="mt-3 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
            لوحة رئيسية <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/my-shop/profile">
              My Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/my-shop/all-products">
              My Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/my-shop/all-shops">
              My Shops
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
