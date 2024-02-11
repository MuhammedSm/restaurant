import React from "react";

const MenuNav = () => {
  return (
    <div>
      <div className="flex  flex-row w-full p-5 align-center items-center justify-center ">
        <div className="w-full">
          <ul className="flex flex-row justify-between mx-24 text-sm sm:flex-col text-white">
            <button className="bg-black m-3 p-2 px-8 rounded-full text-white text-sm">
              <li>Menu</li>
            </button>
            <li>
              <button className="bg-black m-3 p-2 px-8 rounded-full text-white text-sm">
                Events
              </button>
            </li>
            <li>
              <button className="bg-black m-3 p-2 px-8 rounded-full text-white text-sm">
                About
              </button>
            </li>
            <li>
              <button className="bg-black m-3 p-2 px-8 rounded-full text-white text-sm">
                About
              </button>
            </li>
            <li>
              <button className="bg-black m-3 p-2 px-8 rounded-full text-white text-sm">
                About
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
