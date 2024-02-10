import React from "react";

export type Event = {
  id: number;
  image: string;
  title: string;
};
type Props = Event;
const EventsCard = ({ id, image, title }: Props) => {
  return (
    <div>
      <img
        className="w-[250px] h-[150px] rounded-t-[20px]"
        src={image}
        alt=""
      />
      <div className=" flex flex-col bg-black p-6 rounded-b-[20px] justify-center">
        <h2 className="text-Turquoise  text-center font-bold font-['sans'] text-lg">
          {title}
        </h2>
        <p className="text-white text-center text-xs w-[200px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, quae
          inventore, eius harum accusantium ipsa reiciendis,
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
