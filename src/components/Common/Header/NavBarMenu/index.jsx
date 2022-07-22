import React from "react";
import { Link } from "react-router-dom";

export const NavbarMenu = () => {
  return (
    <div className="subheader">
      <nav id="navbar-example2" class="navbar navbar-light bg-dark p-0">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading1">
              First
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">
              Second
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading3">
              Second
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
