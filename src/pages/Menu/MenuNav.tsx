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
      <div className="flex  flex-row w-full p-5 align-center items-center justify-center ">
        <div className="w-full">
          <ul className="flex flex-row w-[70%] justify-between mx-24 text-sm text-white">
            <button
              onClick={scrollToStarters}
              className="hover:bg-orange bg-black m-3 p-2 px-8 rounded-full text-white text-sm"
            >
              <li>Starters</li>
            </button>
            <li>
              <button
                onClick={scrollToBreakfast}
                className="hover:bg-orange bg-black m-3 p-2 px-8 rounded-full text-white text-sm"
              >
                Breakfast
              </button>
            </li>
            <li>
              <button
                onClick={scrollToLunch}
                className="hover:bg-orange bg-black m-3 p-2 px-11 rounded-full text-white text-sm"
              >
                Lunch
              </button>
            </li>
            <li>
              <button
                onClick={scrollToHot}
                className="hover:bg-orange bg-black m-3 p-2 px-8 rounded-full text-white text-sm"
              >
                Hot drinks
              </button>
            </li>
            <li>
              <button
                onClick={scrollToCold}
                className="hover:bg-orange bg-black m-3 p-2 px-8 rounded-full text-white text-sm"
              >
                Cold drinks
              </button>
            </li>
            <li>
              <button className="hover:bg-orange bg-black m-3 p-2 px-8 rounded-full text-white text-sm">
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
