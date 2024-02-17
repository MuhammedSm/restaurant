import React, { useEffect, useState, useRef } from "react";
import { db } from "./BookingForm";
import { getDocs, collection, DocumentData } from "@firebase/firestore";
import PopUp from "../../components/popup/PopUp";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

interface Reservation {
  name: string;
  email: string;
  phone: string;
  table: number;
  date: string;
  time: string;
  guests: number;
}

const ReservationList = () => {
  SwiperCore.use([Navigation, Pagination]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const reservationsData: DocumentData[] = querySnapshot.docs.map((doc) =>
          doc.data()
        );

        const typedReservationsData: Reservation[] = reservationsData.map(
          (data) => ({
            name: data.name || "",
            email: data.email || "",
            phone: data.phone || "",
            table: data.table || 0,
            date: data.date || "",
            time: data.time || "",
            guests: data.guests || 1,
          })
        );

        setReservations(typedReservationsData);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="my-32 bg-Turquoise p-5 rounded-[30px] w-[40%] absolute right-16 top-1/2 transform -translate-y-1/2">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true, // You can customize this option based on your requirements
        }}
        onSlideChange={() => console.log("slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {reservations.map((reservation, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center mt-5">
              <h2 className="text-white text-[20px] font-bold">
                Table Reservation
              </h2>
            </div>
            <div className="bg-gray-500 w-full m-2 h-[1px]"></div>

            <div>
              <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white">
                Customer's Name
              </label>
              <div className="relative">
                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black">
                  {reservation.name || "N/A"}
                </div>
              </div>
            </div>

            <div>
              <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white">
                Booking time and date
              </label>
              <div className="relative">
                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black">
                  {`${reservation.time} on ${reservation.date}`}
                </div>
              </div>
            </div>

            <div>
              <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white">
                Number of Guests
              </label>
              <div className="relative">
                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black">
                  {reservation.guests}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default ReservationList;
