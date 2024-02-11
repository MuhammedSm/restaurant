import NavBar from "../../components/nav/NavBar";
import { Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useTimeoutFn } from "react-use";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsShowing(true);
  }, []);

  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

  return (
    <div className="relative">
      <NavBar />

      <div className="absolute right-40 top-[550px]">
        <img className="w-56 h-48" src="/images/leaf-dark.png" alt="" />
      </div>
      <div className="absolute left-0 bottom-28">
        <img className="w-[250px]" src="/images/egg.png" alt="" />
      </div>
      <div className="absolute left-28 top-36">
        <img className="w-[200px] opacity-85" src="/images/green.png" alt="" />
      </div>
      <div></div>
      <h2 className="ml-32 font-['sans'] text-[40px] font-bold mt-5 ">
        Get In Touch
      </h2>
      <div className="flex flex-row justify-between items-center">
        <div className="ml-32 w-[50%]">
          <div className="flex text-orange mb-4 font-['sans'] text-[30px] font-bold ">
            <p>Embark on a Culinary Odyssey</p>
          </div>
          <p>
            Welcome to to our restaurant, where culinary excellence meets a
            captivating dining experience. Step into a world where flavors dance
            on your palate, and every meal is a celebration. Our commitment to
            exceptional quality and warm hospitality sets us apart, inviting you
            to savor moments that linger long after the last bite.
          </p>
        </div>

        <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[900ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <img
            className="w-[350px] h-[350px] shadow-lg rounded-full mx-20"
            src="/images/rest.jpg"
            alt=""
          />
        </Transition>
      </div>
      <div className="flex flex-row justify-between  items-center">
        <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[900ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <img
            className="w-[350px] h-[350px] shadow-lg rounded-full m-20"
            src="/images/story.jpg"
            alt=""
          />
        </Transition>
        <div className="mr-32 w-[50%]">
          <div className="flex mb-4 font-['sans'] text-[30px] font-bold text-orange">
            <p> Our Story</p>
          </div>
          <p>
            Our story unfolds like a culinary journey, woven with passion and
            dedication. From humble beginnings to becoming a cornerstone of the
            community, our restaurant's evolution is a testament to the love and
            support of our patrons. Explore the chapters of our history, marked
            by unforgettable anecdotes, milestones, and the unique elements that
            make dining with us a truly remarkable experience. Let the visuals
            paint a vivid picture, as we share the moments that define us,
            captured in the lens of shared memories and delectable creations.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center  items-center">
        <div className=" m-10 flex flex-col justify-center items-center">
          <div className="flex font-['sans'] text-[30px] mb-2 font-bold text-orange">
            <p> Chef and Culinary Philosophy</p>
          </div>
          <p className="text-center w-[90%]">
            Meet the visionary maestros behind our culinary magic - Remy and our
            dedicated culinary team. With a shared passion for crafting
            extraordinary dining experiences, they bring creativity and
            expertise to every plate. Immerse yourself in the artistry of our
            kitchen as you witness Remy at work, infusing each dish with a blend
            of innovation and tradition. Explore our culinary philosophy, where
            fresh, locally-sourced ingredients meet skillful craftsmanship,
            resulting in signature dishes that are a symphony of flavors,
            textures, and culinary mastery.
          </p>
        </div>
        <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[900ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <img
            className="w-[600px] h-[500px] rounded-[30px] mb-16 shadow-lg  "
            src="/images/chef.jpg"
            alt=""
          />
        </Transition>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
