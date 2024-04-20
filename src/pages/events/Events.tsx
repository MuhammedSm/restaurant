import React from "react";
import EventsCard from "./EventsCard";

const Events = () => {
  const title = ["Gourmet Burger", "Special Seafood", "Chicken Salad"];
  return (
    <div className="bg-white mt-5 p-4 sm:p-8">
      {" "}
      <div className="flex flex-col items-center relative">
        <div className="absolute right-0 top-[-15%] sm:top-0">
          {" "}
          <img
            className="w-20 h-24 sm:w-28 sm:h-32 opacity-95"
            src="/images/onion-right.png"
            alt=""
          />
        </div>
        <div className="absolute left-0 top-0 sm:left-20 sm:top-5">
          {" "}
          <img
            className="w-[150px] sm:w-[200px] opacity-85"
            src="/images/green.png"
            alt=""
          />
        </div>
        <h2 className="flex m-4 sm:m-6 text-orange font-sans text-[24px] sm:text-[30px] font-bold">
          {" "}
          {/* Adjusted font size */}
          Specialties of the House
        </h2>
      </div>
      <div className="flex flex-col items-center  sm:flex-row sm:justify-center gap-4 pb-8 sm:pb-16">
        {" "}
        {/* Adjusted layout */}
        {title.map((title, index) => (
          <EventsCard
            key={index}
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
