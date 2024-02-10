import React from "react";
import EventsCard from "./EventsCard";

const Events = () => {
  const title = ["Gourmet Burger", "Special Seafood", "Chicken Salad"];
  return (
    <div className="bg-white mt-5">
      <div className="flex justify-center relative">
        <div className="absolute right-10 top-28">
          <img
            className="w-28 h-32 opacity-95"
            src="/images/onion-right.png"
            alt=""
          />
        </div>
        <div className="absolute left-20 top-5">
          <img
            className="w-[200px] opacity-85"
            src="/images/green.png"
            alt=""
          />
        </div>
        <h2 className="flex m-6 text-orange font-['sans'] text-[30px] font-bold">
          Specialties of the House
        </h2>
      </div>
      <div className="flex flex-row gap-9 justify-center pb-16">
        {title.map((title, index) => (
          <EventsCard
            title={`${title}`}
            image={`/images/${title}.png`}
            id={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
