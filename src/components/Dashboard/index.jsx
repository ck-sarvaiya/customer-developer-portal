import React from "react";
import { MainSection } from "../../pages/login/main";
import { HeaderTopBar } from "../Common/Header";
import { NavbarMenu } from "../Common/Header/NavBarMenu";
import { SideBarLeft } from "../Common/Sidebar";

export const MainDashBoard = () => {
  return (
    <div>
      <HeaderTopBar />
      <SideBarLeft />
      <NavbarMenu />
      <MainSection />
    </div>
  );
};
