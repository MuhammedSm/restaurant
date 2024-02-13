import { Link, useNavigate, Navigate } from "react-router-dom";
import { Paths } from "../../routes/paths";

const NavBar = () => {
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
  const handleNavigateToBooking = () => {
    navigate(Paths.BookingPage);
  };

  return (
    <div>
      <div className="flex flex-row w-full p-7 align-center items-center ">
        <div className="w-full justify-center flex flex-row align-center items-center">
          <a href="/">
            <img
              className="w-[140px] h-[35px] mr-[90px]"
              src="/images/logo.png"
              alt=""
            />
          </a>
          <ul className="flex flex-row gap-16 mx-24 text-sm sm:flex-col">
            <button
              onClick={handleNavigateToMenu}
              className="hover:text-Turquoise"
            >
              <li>Menu</li>
            </button>

            <li>
              <button
                onClick={handleNavigateToAbout}
                className="hover:text-Turquoise"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={handleNavigateToContact}
                className="hover:text-Turquoise"
              >
                Contact
              </button>
            </li>
          </ul>
          <button
            onClick={handleNavigateToBooking}
            className="hover:bg-Turquoise bg-orange p-3 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm text-white text-sm sm:hidden"
          >
            Book a table
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
