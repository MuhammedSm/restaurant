import { Fragment, useState, useEffect, useContext } from "react";
import { useTimeoutFn } from "react-use";
import NavBar from "../../components/nav/NavBar";
import NavMobile from "../../components/nav/NavMobile";
import Footer from "../../components/footer/Footer";
import MobileFooter from "../../components/footer/MobileFooter";
import { Transition } from "@headlessui/react";
import { MobileContext } from "../../MobileContext";

const StoryImageMobile = ({ isShowing }) => {
  return (
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
        className="w-[350px] h-[350px] shadow-lg md:rounded-full rounded-[20px] mx-20 mt-10 sm:mt-0"
        src="/images/story.jpg"
        alt=""
      />
    </Transition>
  );
};
const About = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isMobilet, setIsMobile] = useState(false);

  useEffect(() => {
    setIsShowing(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  const isMobile = useContext(MobileContext);
  return (
    <div className="relative">
      {isMobile ? <NavMobile /> : <NavBar />}

      <div className="absolute right-40 top-[550px]">
        <img className="w-56 h-48" src="/images/leaf-dark.png" alt="" />
      </div>
      <div className="absolute left-0 bottom-28">
        <img className="w-[250px]" src="/images/egg.png" alt="" />
      </div>
      <div className="absolute left-28 top-36">
        <img className="w-[200px] opacity-85" src="/images/green.png" alt="" />
      </div>

      <h2 className="md:ml-10 sm:ml-32 font-sans text-[40px] font-bold md:pt-5 pt-20 px-4">
        About us
      </h2>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center px-4">
        <div className="md:ml-10 ">
          <div className="flex text-orange mb-4 font-sans text-[30px] font-bold ">
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
            className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] shadow-lg md:rounded-full rounded-[20px] mx-20 mt-10 sm:mt-0"
            src="/images/rest.jpg"
            alt=""
          />
        </Transition>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center px-4">
        {/* Story image for larger screens */}
        <Transition
          as={Fragment}
          show={!isMobile}
          enter="transform transition duration-[900ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <img
            className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] shadow-lg rounded-full m-10"
            src="/images/story.jpg"
            alt=""
          />
        </Transition>

        {/* Story text */}
        <div className="mr-10 sm:mr-32 sm:w-[50%] mt-10 sm:mt-0">
          <div className="flex mb-4 font-sans text-[30px] font-bold text-orange">
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

        {/* Story image for mobile screens */}
        <StoryImageMobile isShowing={isMobile && isShowing} />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="md:m-10 flex flex-col justify-center items-center md:p-1 p-4">
          <div className="flex font-sans text-[30px] mb-2 font-bold text-orange">
            <p> Chef and Culinary Philosophy</p>
          </div>
          <p className="md:text-center md:w-[90%]">
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
            className="md:w-[600px] md:h-[500px] sm:w-[700px] sm:h-[600px] rounded-[30px] mb-16 md:shadow-lg md:p-1 p-4 "
            src="/images/chef.jpg"
            alt=""
          />
        </Transition>
      </div>
      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default About;
