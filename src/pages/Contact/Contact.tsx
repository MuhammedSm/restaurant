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
      {!isMobile && (
        <>
          {" "}
          <div className="absolute right-40 top-[550px]">
            <img className="w-56 h-48" src="/images/leaf-dark.png" alt="" />
          </div>
          <div className="absolute left-0 bottom-28">
            <img className="w-[250px]" src="/images/egg.png" alt="" />
          </div>{" "}
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-14 pb-12 md:pt-14 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-20">
            <h1 className="h1">Have a question? Please reach out</h1>
            <p className="text-xl mb-8 mt-3">
              I’d love to hear about what you’re looking for. Give me a few
              details below and I'll be in touch shortly.
            </p>
            <p className="text-xl">
              If you’d prefer email or by phone, reach out to{" "}
              <span className="text-orange font-semibold">
                <a href="mailto:muhammedseyhmusa5@gmail.com">
                  muhammedseyhmusa5@gmail.com
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
                    className="form-input w-full p-2 rounded-[20px] border-2  border-Turquoise  text-gray-800"
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
                    className="form-input w-full p-2 rounded-[20px] border-2  border-Turquoise  text-gray-800"
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
                      className="form-checkbox h-5 w-5 text-Turquoise"
                    />
                    <label htmlFor="checkbox" className="ml-2 text-gray-800">
                      Careers
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
                      No availabile tables
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
                      Location info
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
                    className="form-input w-full p-2 rounded-[20px] border-2  border-Turquoise  text-gray-800"
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
                    className="btn text-white bg-Turquoise hover:bg-orange p-2 rounded-[20px] w-full"
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
              <p className="text-orange mt-3 text-center">
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
