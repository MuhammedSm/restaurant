"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/NavBar";
import { MobileContext } from "../../MobileContext";
import NavMobile from "../../components/nav/NavMobile";
import MobileFooter from "../../components/footer/MobileFooter";
const Contact = () => {
  const isMobile = useContext(MobileContext);

  const form = useRef<HTMLFormElement>(null);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      if (form.current) {
        await emailjs.sendForm(
          "service_r9bzvgo",
          "template_fcnimzl",
          form.current,
          "b2j8XAM2Ircg-WGPo"
        );

        setIsEmailSent(true);
        form.current.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      {isMobile ? <NavMobile /> : <NavBar />}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-14 pb-12 md:pt-14 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-20">
            <h1 className="h1">
              Have a project in mind? let's bring it to life together
            </h1>
            <p className="text-xl text-gray-600 mb-8 mt-3">
              I’d love to hear about what you’re looking for. Give me a few
              details below and I'll be in touch shortly.
            </p>
            <p className="text-xl text-gray-600">
              If you’d prefer email or by phone, reach out to{" "}
              <span className="text-blue-500">
                <a href="mailto:webcapsuleofficial@gmail.com">
                  webcapsuleofficial@gmail.com
                </a>
                <br />
                Phone: +961 76606658
              </span>
              .
            </p>
            {/* dvgdvydvgd */}
            {/* gyg */}
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              {/* Checkbox options */}
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1">
                    What do you need help with?{" "}
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      value="Menu for Restaurants"
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="checkbox" className="ml-2 text-gray-800">
                      Menu for Restaurants
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      value="Basic Web service"
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="checkbox" className="ml-2 text-gray-800">
                      Basic Web service
                    </label>
                  </div>{" "}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      value="E-commerce websites for Large Businesses"
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="checkbox" className="ml-2 text-gray-800">
                      E-commerce websites for Large Businesses
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="message"
                  >
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    className="form-input w-full text-gray-800"
                    name="message"
                    placeholder="Enter your message"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="animate-spin mr-2">&#9696;</span>{" "}
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </div>
            </form>
            {isEmailSent && (
              <p className="text-green-500 mt-3 text-center">
                Your message was successfully sent!
              </p>
            )}
          </div>
        </div>
      </div>
      {isMobile ? <MobileFooter /> : <Footer />}
    </section>
  );
};
export default Contact;
