import React from "react";
import { Link } from "react-router-dom";

export const NavbarMenu = () => {
  return (
    <div className="subheader">
      <ul
        style={{ overflowX: "auto" }}
        className="nav nav-tabs nav-tabs-custom flex-grow-1 overflow-x-auto text-nowrap flex-nowrap mr-2 bg-dark"
        role="tablist"
      >
        <li className="nav-item" style={{ display: "inline-block" }}>
          <Link to="" className="nav-link">
            dasdffdsfg
          </Link>
        </li>
      </ul>
    </div>
  );
};
