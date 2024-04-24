import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Paths } from "../../routes/paths";
const Footer = () => {
  const navigate = useNavigate();

  const handleNavigateToMenu = () => {
    navigate(Paths.MenuPage);
  };
  const handleNavigateToAbout = () => {
    navigate(Paths.About);
  };
  const handleNavigateToContact = () => {
    navigate(Paths.Contact);
  };
  return (
    <div>
      <div className="flex flex-row w-full p-4  bg-Turquoise relative">
        <div className="w-full gap-80 flex flex-row">
          <div className="flex flex-col text-white">
            <a href="/">
              {" "}
              <img
                className="w-[140px] h-[35px] mr-[90px] my-4"
                src="/images/logo.png"
                alt=""
              />
            </a>
            <div className="mx-7">Beirut, Lebanon</div>
            <div className="mx-7">
              <a href="mailto:webcapsuleofficial@gmail.com">
                muhammedseyhmusa5@gmail.com
              </a>
            </div>
          </div>
          <div className="text-white">
            <h2 className="my-4 text-black font-bold">Navigation</h2>
            <ul className=" flex flex-col gap-2 text-sm sm:flex-col">
              <li>
                {" "}
                <button
                  onClick={handleNavigateToMenu}
                  className="hover:text-orange"
                >
                  Menu
                </button>
              </li>

              <li>
                <button
                  onClick={handleNavigateToAbout}
                  className="hover:text-orange"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={handleNavigateToContact}
                  className="hover:text-orange"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="/">
                  <button className="hover:text-orange">Home</button>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h2 className="my-4 text-black font-bold">Follow Us</h2>
            <div className=" flex flex-row gap-5 text-sm sm:flex-col">
              <a
                target="_blank"
                href="https://www.instagram.com/_.mo_hamad_?igsh=MTJoaTN5a2thcmVjOQ=="
              >
                <img
                  className="w-[25px] h-[25px]"
                  src="/images/instagram.png"
                  alt=""
                />{" "}
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/muhammed-cheikh-moussa-001968211/"
              >
                {" "}
                <img
                  className="w-[25px] h-[25px]"
                  src="/images/linkedin.png"
                  alt=""
                />
              </a>
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
