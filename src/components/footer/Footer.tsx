import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row w-full p-4  bg-Turquoise relative">
        <div className="w-full gap-80 flex flex-row">
          <div className="flex flex-col text-white">
            <img
              className="w-[140px] h-[35px] mr-[90px] my-4"
              src="/images/logo.png"
              alt=""
            />
            <div className="mx-7">Beirut, Lebanon</div>
            <div className="mx-7">muhammedseyhmusa@gmail.com</div>
          </div>
          <div className="text-white">
            <h2 className="my-4 text-black font-bold">Navigation</h2>
            <ul className=" flex flex-col gap-2 text-sm sm:flex-col">
              <li>Home</li>
              <li>Events</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-white">
            <h2 className="my-4 text-black font-bold">Follow Us</h2>
            <div className=" flex flex-row gap-5 text-sm sm:flex-col">
              <img
                className="w-[25px] h-[25px]"
                src="/images/instagram.png"
                alt=""
              />
              <img
                className="w-[25px] h-[25px]"
                src="/images/linkedin.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="pb-1 bg-Turquoise text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} Muhammed Cheikh Moussa. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
