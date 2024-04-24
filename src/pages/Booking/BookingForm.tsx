import React, { useState } from "react";
import { initializeApp } from "@firebase/app";
import { getFirestore, collection, addDoc } from "@firebase/firestore";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import PopUp from "../../components/popup/PopUp";
interface FormData {
  name: string;
  email: string;
  phone: string;
  table: number;
  date: string;
  time: string;
  guests: number;
}
//test
function BookingForm() {
  const { register, handleSubmit, control } = useForm<FormData>();

  const defaultValues: FormData = {
    name: "",
    email: "",
    phone: "",
    table: 0,
    date: "",
    time: "",
    guests: 1,
  };
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity: number) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity: number) => Math.max(prevQuantity - 1, 1));
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log("Form submitted with data:", data);
      await addDoc(collection(db, "bookings"), data);
      alert("Your booking has been submitted!");
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="m-36">
      <PopUp
        backgroundColor="Turquoise shadow-lg border border-gray-300"
        className="my-40"
      >
        <div className="flex justify-center mt-5">
          <h2 className="text-white text-[20px]  font-bold">
            Table Reservation
          </h2>
        </div>
        <form
          className="max-w-[300px] mx-auto mb-7"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                type="text"
                id="name"
                {...register("name", { required: true })}
                defaultValue={defaultValues.name}
              />
            </div>
          </div>
          <div>
            <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                type="email"
                id="email"
                {...register("email", { required: true })}
                defaultValue={defaultValues.email}
              />
            </div>
          </div>
          <div>
            <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="76 606 658"
                type="text"
                id="phone"
                {...register("phone", { required: true })}
                defaultValue={defaultValues.phone}
              />
            </div>
          </div>

          <div>
            <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white">
              Date
            </label>
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>

              <input
                type="date"
                id="date"
                {...register("date", { required: true })}
                defaultValue={defaultValues.date}
                className="  mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              {/* <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg> */}
            </div>
          </div>
          <div>
            <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Time
            </label>
            <input
              type="time"
              id="time"
              {...register("time", { required: true })}
              defaultValue={defaultValues.time}
              className="  mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select time"
            />
          </div>
          <div>
            <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white">
              Choose quantity:
            </label>
            <div className="flex justify-center">
              <div className="relative flex items-center max-w-[11rem]">
                <button
                  type="button"
                  id="decrement-button"
                  onClick={() => handleDecrement()}
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>

                <input
                  type="number"
                  id="guests"
                  {...register("guests", { required: true, min: 1, max: 10 })}
                  defaultValue={defaultValues.guests}
                  data-input-counter
                  data-input-counter-min="1"
                  data-input-counter-max="5"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  value={quantity} // Use quantity here
                  onChange={(e) => setQuantity(parseInt(e.target.value))} // Update quantity state on change
                  required
                  style={{
                    WebkitAppearance: "none",
                    margin: 0,
                  }}
                />
                <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                  <svg
                    className="w-2.5 h-2.5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                    />
                  </svg>
                  <span>Guests</span>
                </div>
                <button
                  type="button"
                  id="increment-button"
                  onClick={() => handleIncrement()}
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col">
                <p
                  id="helper-text-explanation"
                  className="mt-2 text-sm text-white dark:text-white"
                >
                  Please select the number of guests.
                </p>

                <button
                  className="hover:bg-orange bg-gray-700  p-3  mt-2 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm text-white text-sm "
                  type="submit"
                >
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </form>
      </PopUp>
    </div>
  );
}
const firebaseConfig = {
  apiKey: "AIzaSyD3B9hxzb5uTiBdyZloAamN1Coh3wNTYxg",
  authDomain: "restaurant-ebd68.firebaseapp.com",
  databaseURL: "https://restaurant-ebd68-default-rtdb.firebaseio.com",
  projectId: "restaurant-ebd68",
  storageBucket: "restaurant-ebd68.appspot.com",
  messagingSenderId: "335067204122",
  appId: "1:335067204122:web:bb742fac02b94cf07c9fa3",
  measurementId: "G-N2N7KT6EQ6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default BookingForm;
