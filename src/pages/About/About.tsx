import React from "react";
import NavBar from "../../components/nav/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <h2 className="ml-32 font-['sans'] text-[40px] font-bold mb-7">About</h2>
      <div className="flex flex-row gap-48">
        <div className="ml-32 w-[30%]">
          <div className="flex mb-4 font-['sans'] text-[30px] font-bold ">
            <p>Indulge Your Palate: A Culinary Symphony Awaits</p>
          </div>
          <p>
            lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit am,
            lorem ipsum dolor. Lorem ipsum dolor sit am et
          </p>
        </div>
        <img
          className="w-[340px] h-[340px] shadow-lg rounded-full"
          src="/images/rest.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
