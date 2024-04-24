import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Paths } from "../../routes/paths";

const MobileFooter = () => {
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
    <div className="flex flex-col justify-center items-center p-4 bg-Turquoise">
      <div className="flex flex-col items-center text-white mb-4">
        <img
          className="w-[140px] h-[35px] my-4"
          src="/images/logo.png"
          alt=""
        />
        <div>Beirut, Lebanon</div>
        <div>
          <a href="mailto:muhammedseyhmusa5@gmail.com">
            muhammedseyhmusa5@gmail.com
          </a>
        </div>
      </div>

      <div className="text-white mb-4">
        <h2 className="my-2 text-black font-bold">Navigation</h2>
        <ul className="flex flex-col items-center gap-2 text-sm">
          <li>
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
        </ul>
      </div>

      <div className="text-white mb-4">
        <h2 className="my-2 text-black font-bold">Follow Us</h2>
        <div className="flex gap-5 text-sm">
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
            rel="noreferrer"
          >
            <img
              className="w-[25px] h-[25px]"
              src="/images/linkedin.png"
              alt=""
            />
          </a>
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

export default MobileFooter;
