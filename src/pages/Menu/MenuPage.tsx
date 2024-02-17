import React from "react";
import NavBar from "../../components/nav/NavBar";
import MenuNav from "./MenuNav";

const MenuPage = () => {
  return (
    <div>
      <div>
        <NavBar />
        <h2 className=" ml-32 text-black font-['sans'] text-[40px] font-bold">
          Menu
        </h2>

        <MenuNav />
      </div>
    </div>
  );
};

export default MenuPage;
