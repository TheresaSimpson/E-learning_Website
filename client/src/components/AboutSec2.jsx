import React from 'react'
import background from "../assets/img/background1.jpg";
// import logo2 from "../assets/img/logo2.jpg";
import { NavLink } from "react-router-dom";

const AboutSec4 = () => {
return (
  <div>
    <section className="text-gray-600 body-font overflow-hidden bg-pearl-bush-500 mt-24 mb-24">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6  lg:mb-0">
            <h1 className="text-red-500 text-3xl title-font font-medium mb-4">
              WHAT WE OFFER
            </h1>

            <p className="leading-relaxed text-xl font-serif mb-4 text-daintree">
              Tessy Simps is an online learning platform that offers, not just BECE Candidates access to sample past
              questions but anyone students who wishes to study. We make learning fun.
            Get updated with upcoming examination dates and news 
        
            </p>
            <div className="mt-9">
              <button
                className="py-4  px-3 
            font-bold
            rounded-lg
            shadow-md
            
            text-daintree-500
            bg-white
            hover:bg-daintree-400 
            hover:text-white
            "
              >
                <NavLink className="p-4" to="/login">
                  Get Started
                </NavLink>
              </button>
            </div>
          </div>

          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={background}
          />
        </div>
      </div>
    </section>
  </div>
);
}

export default AboutSec4;
