import Chatgpt from "../../components/chatgpt/Chatgpt";
import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";
import Events from "../events/Events";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Paths } from "../../routes/paths";

const HomePage = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();

  const handleNavigateToMenu = () => {
    navigate(Paths.MenuPage);
  };
  return (
    <div className="relative">
      <NavBar />
      <div className="relative">
        <div className="absolute right-10 top-0">
          <img className="w-56 h-48" src="/images/leaf-dark.png" alt="" />
        </div>
        <div className="absolute left-0 bottom-0">
          <img className="w-[250px] opacity-75" src="/images/egg.png" alt="" />
        </div>
        <div></div>
        <div className="absolute rotate-90 hover:text-Turquoise bottom-[40%]  m-3 p-2 px-8 font-bold rounded-lg text-orange text-sm  z-10 right-2">
          <div className="flex flex-row ">
            <button onClick={scrollToEvents}>
              {" "}
              <img
                className="w-[25px] h-[25px] m-2"
                src="/images/arrow-circle-right.svg"
                alt=""
              />
            </button>
            <button onClick={scrollToEvents}>Scroll to Events</button>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="p-20 ml-6 w-[50%]">
            <div className="flex mt-16 mb-4 font-['sans'] text-[30px] font-bold ">
              <p>Indulge Your Palate: A Culinary Symphony Awaits</p>
            </div>
            <p>
              lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit am,
              lorem ipsum dolor. Lorem ipsum dolor sit am et
            </p>
            <div className="flex flex-row gap-8 mt-7">
              <button
                onClick={handleNavigateToMenu}
                className="hover:bg-Turquoise bg-black p-3 px-5 rounded-tl-lg rounded-tr-sm rounded-br-lg shadow-lg z-10 rounded-bl-sm text-white text-sm sm:hidden"
              >
                Menu
              </button>
              <button className="hover:bg-Turquoise bg-orange p-3 rounded-tl-lg rounded-tr-sm rounded-br-lg shadow-lg rounded-bl-sm text-white text-sm sm:hidden">
                Book a table
              </button>
            </div>
          </div>
          <img
            className="mt-14 w-[340px] h-[450px] rounded-[30px] shadow-lg"
            src="/images/rest.jpg"
            alt=""
          />
        </div>
      </div>
      <div id="events">
        <Events />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
