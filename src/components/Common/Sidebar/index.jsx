import React from "react";
import { Link } from "react-router-dom";

export const SideBarLeft = () => {
  return (
    <aside className="left-sidebar p-10">
      <nav className="sidebar-nav">
        <div className="d-flex justify-content-between w-100 bg-white">
          <div className="app-search header-search position-relative ">
            <span className="search-icon "></span>
            <div className="position-relative">
              <input
                type="search"
                className="form-control input-search-left"
                placeholder="Search..."
                value=""
              />
            </div>
          </div>
        </div>
        {/* <Link className="sidebar-link">
          <i className="uil uil-map"></i>
          <span className="hide-menu">Tracking</span>
        </Link> */}
        <Link to="/home">Home</Link>
      </nav>
    </aside>
  );
};
