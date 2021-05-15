import React from "react";
import about2 from "../assets/img/about2.jpg";

const AboutSec1 = () => {
  return (
    <div className="bg-daintree-500 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-100">
      <div className="text-white  px-24 pt-40 ">
        <b>
          <h3 className="text-red-500 text-4xl text-center mb-4 "> Overview</h3>
        </b>
        <p className="text-2xl text-spring-wood-500 font-serif text-justify">
          Every individual has the potential to create change, whether in their
          life, their community, or the world. The transformative power of
          education is what unlocks that potential. Yet, access to high-quality
          education has been a privilege of the few. From “for some” to “for
          all.” By opening the classroom through online learning, Tessy Simps
          empowers millions of learners to unlock their potential and become
          changemakers.
        </p>
      </div>

      <div className="">
        <img src={about2} alt="" className="bg-contain w-full" />
      </div>
    </div>
  );
};

export default AboutSec1;
