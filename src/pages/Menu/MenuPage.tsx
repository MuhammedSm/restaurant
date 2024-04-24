import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../components/nav/NavBar";
import MenuNav from "./MenuNav";
import Footer from "../../components/footer/Footer";
import NavMobile from "../../components/nav/NavMobile";
import MobileFooter from "../../components/footer/MobileFooter";
import MobileMenuNav from "./MobileMenuNav";
import { MobileContext } from "../../MobileContext";
const MenuPage = () => {
  const starters = [
    {
      title: "French Fries",
      description: "An iconic side dish made from potatoes.",
    },
    {
      title: "Garlic bread",
      description:
        "A delectable culinary creation that combines the irresistible flavors of fresh bread, garlic, and butter.",
    },
  ];

  const breakfast = [
    {
      title: "Classic Breakfast Platter",
      description:
        "Start your day with a hearty and delicious breakfast that will keep you energized for hours. Enjoy two sunny-side-up eggs with bright yellow yolks, two grilled sausages with a browned exterior, a portion of golden-brown French fries, triangular toast slices with grill marks, a serving of dark red kidney beans, and a glass cup of red sauce.",
    },
    {
      title: "Gourmet Delight",
      description:
        " The plate consists of grilled bread, dates, nuts, cheese, and honey, arranged on a round wooden plate for a warm and inviting ambiance.",
    },
  ];
  const Lunch = [
    {
      title: "Grilled Sausage and Vegetable Medley",
      description:
        "The dish consists of grilled sausages, mushrooms, tomatoes, and zucchini, garnished with a drizzle of sauce and a sprig of mint.",
    },
    {
      title: "Grilled Chicken and Edamame Salad",
      description:
        " A colorful and appetizing salad bowl containing grilled chicken pieces, boiled eggs, edamame beans, cherry tomatoes, corn kernels, cucumber pieces, purple cabbage strips, and leafy greens.",
    },
  ];
  const HotDrinks = [
    {
      title: "Regular brewed coffee",
      description:
        "A classic and timeless beverage that is made by steeping coarsely ground coffee beans in hot water.",
    },
    {
      title: "Coffee Espresso",
      description:
        "A concentrated coffee beverage crafted by forcing hot water through finely-ground coffee beans.",
    },
  ];
  const ColdDrinks = [
    {
      title: "Chocolate milkshake",
      description:
        "A delightful and indulgent beverage that seamlessly blends the rich, velvety goodness of chocolate with the cool, creamy texture of milk and ice cream.",
    },
    {
      title: "Juice",
      description:
        "A popular beverage known for its refreshing and flavorful qualities.",
    },
  ];

  const menuSections = [
    { title: "Starters", items: starters },
    { title: "Breakfast", items: breakfast },
    { title: "Lunch", items: Lunch },
    { title: "Hot Drinks", items: HotDrinks },
    { title: "Cold Drinks", items: ColdDrinks },
  ];

  const isMobile = useContext(MobileContext);
  return (
    <div>
      <div className="">
        {isMobile ? <NavMobile /> : <NavBar />}
        <h2 className="relative pt-16 ml-32 text-black font-['sans'] text-[40px] font-bold">
          Menu
        </h2>
        <div> {isMobile ? <MobileMenuNav /> : <MenuNav />}</div>

        {!isMobile && (
          <>
            <div className="absolute right-14 top-36">
              <img
                className="w-[200px] opacity-100 z-0"
                src="/images/green.png"
                alt=""
              />
            </div>
            <div className="absolute right-40 top-[500px] z-0">
              <img
                className="w-28 h-32 opacity-95"
                src="/images/onion-right.png"
                alt=""
              />
            </div>
          </>
        )}

        <div className="mt-7 max-w-screen-xl mx-auto">
          {menuSections.map((section, index) => (
            <div id={`${section.title}`} key={index} className="mb-8">
              <h2 className="text-2xl ml-32 font-bold mb-6 text-orange">
                {section.title}
              </h2>
              <div className="flex flex-col md:flex-row md:ml-28 md:flex-wrap">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="items-center mb-5 md:gap-8 flex flex-col md:flex-row p-4"
                  >
                    <img
                      src={`/images/${item.title}.png`}
                      alt={item.title}
                      className="w-36 h-32  bg-Turquoise rounded-[20px] object-cover p-5 mb-2"
                    />
                    <div className="w-full md:w-[50%] md:items-start items-center gap-6 flex flex-col p-4">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default MenuPage;
