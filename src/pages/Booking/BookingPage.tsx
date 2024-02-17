import React, { useState } from "react";
import BookingForm from "./BookingForm";
import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";
import ReservationList from "./ReservationList";
import "swiper/swiper-bundle.css";
const BookingPage = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showReservationList, setShowReservationList] = useState(false);

  const handleReserveClick = () => {
    setShowBookingForm(!showBookingForm);
    setShowReservationList(false); // Hide reservation list when clicking "View reservations"
  };

  const handleViewReservationsClick = () => {
    setShowReservationList(!showReservationList);
    setShowBookingForm(false); // Hide booking form when clicking "View reservations"
  };

  return (
    <div>
      <div>
        <div className="">
          <NavBar />
        </div>

        <div className="absolute right-14 top-36">
          <img
            className="w-[200px] opacity-100"
            src="/images/green.png"
            alt=""
          />
        </div>
        <div className="absolute right-40 top-96">
          <img
            className="w-28 h-32 opacity-95"
            src="/images/onion-right.png"
            alt=""
          />
        </div>

        <div className="relative flex flex-col p-7 ml-10 font-['sans'] ">
          <div className="m-5 max-w-[586px]">
            <img
              className=" shadow-lg  rounded-lg"
              src="/images/booking.jpg"
              alt=""
            />

            <div className="m-7 items-center  gap-7 flex flex-col">
              <button
                className="w-full font-bold bg-gray-200 rounded-lg py-4 px-7 border border-gray-300"
                onClick={handleViewReservationsClick}
              >
                View reservations
              </button>
              <button
                className="w-full text-white font-bold bg-Turquoise rounded-lg py-4 px-7 border border-gray-300"
                onClick={handleReserveClick}
              >
                Reserve now
              </button>
            </div>
          </div>
        </div>
        {showBookingForm && <BookingForm />}
        {showReservationList && <ReservationList />}
        <Footer />
      </div>
    </div>
  );
};

export default BookingPage;
