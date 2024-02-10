const NavBar = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="flex flex-row w-full p-7 align-center items-center ">
        <div className="w-full justify-center flex flex-row align-center items-center">
          <img
            className="w-[140px] h-[35px] mr-[90px]"
            src="/images/logo.png"
            alt=""
          />
          <ul className="flex flex-row gap-16 mx-24 text-sm sm:flex-col">
            <li>Menu</li>
            <li>
              <button onClick={scrollToEvents}>Events</button>
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button className="bg-orange p-3 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm text-white text-sm sm:hidden">
            Book a table
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
