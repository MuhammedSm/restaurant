import React from "react";
import { initializeApp } from "@firebase/app";
import { getFirestore, collection, addDoc } from "@firebase/firestore";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  table: number;
  date: string;
  time: string;
  guests: number;
}

function BookingForm() {
  const { register, handleSubmit, control } = useForm<FormData>();

  // Set default values for your form inputs
  const defaultValues: FormData = {
    name: "",
    email: "",
    phone: "",
    table: 0,
    date: "",
    time: "",
    guests: 1,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          defaultValue={defaultValues.name}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          defaultValue={defaultValues.email}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <Controller
          name="phone"
          control={control}
          rules={{ required: true, pattern: /^[0-9]+$/ }}
          render={({ field }) => (
            <input
              type="tel"
              id="phone"
              {...field}
              defaultValue={defaultValues.phone}
            />
          )}
        />
      </div>
      <div>
        <label htmlFor="table">Table:</label>
        <Controller
          name="table"
          control={control}
          rules={{ required: true, min: 1, max: 10 }}
          render={({ field }) => (
            <input
              type="number"
              id="table"
              {...field}
              defaultValue={defaultValues.table}
            />
          )}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          {...register("date", { required: true })}
          defaultValue={defaultValues.date}
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          {...register("time", { required: true })}
          defaultValue={defaultValues.time}
        />
      </div>
      <div>
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          {...register("guests", { required: true, min: 1, max: 10 })}
          defaultValue={defaultValues.guests}
        />
      </div>
      <button type="submit">Book a table</button>
    </form>
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
