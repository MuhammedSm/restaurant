import React from "react";

const MenuNav = () => {
  const scrollToStarters = () => {
    const StartersSection = document.getElementById("Starters");
    if (StartersSection) {
      StartersSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToLunch = () => {
    const LunchSection = document.getElementById("Lunch");
    if (LunchSection) {
      LunchSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToBreakfast = () => {
    const BreakfastSection = document.getElementById("Breakfast");
    if (BreakfastSection) {
      BreakfastSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHot = () => {
    const HotSection = document.getElementById("Hot Drinks");
    if (HotSection) {
      HotSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToCold = () => {
    const ColdSection = document.getElementById("Cold Drinks");
    if (ColdSection) {
      ColdSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const scrollToStarters = () => {
  //   const StartersSection = document.getElementById("Starters");
  //   if (StartersSection) {
  //     StartersSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <div>
      <div className="flex  flex-row w-full p-5 align-center items-center justify-center">
        <div className=" bg-orange  rounded-lg">
          <ul className="flex flex-col justify-center items-center py-2 mx-24 text-sm text-white ">
            <li>
              {" "}
              <button
                onClick={scrollToStarters}
                className="hover:bg-black rounded-lg p-2 font-bold z-10"
              >
                Starters
              </button>{" "}
            </li>
            <li>
              <button
                onClick={scrollToBreakfast}
                className="hover:bg-black rounded-lg p-2 font-bold"
              >
                Breakfast
              </button>
            </li>
            <li>
              <button
                onClick={scrollToLunch}
                className="hover:bg-black rounded-lg p-2 font-bold"
              >
                Lunch
              </button>
            </li>
            <li>
              <button
                onClick={scrollToHot}
                className="hover:bg-black rounded-lg p-2 font-bold"
              >
                Hot drinks
              </button>
            </li>
            <li>
              <button
                onClick={scrollToCold}
                className="hover:bg-black rounded-lg p-2 font-bold"
              >
                Cold drinks
              </button>
            </li>
            <li>
              <button className="hover:bg-black rounded-lg p-2 font-bold">
                Desserts
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
