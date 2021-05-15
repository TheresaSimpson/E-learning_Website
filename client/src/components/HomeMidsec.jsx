import React from "react";
import {NavLink} from "react-router-dom";
import softskills from "../assets/img/softskills.png";
import science from "../assets/img/science.png";
import math from "../assets/img/math.png";
import news from "../assets/img/news.png";


const HomeMidsec = () => {
  return (
    <div>
      <div className="flex flex-col text-center w-full mt-24">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          E-Learning Resources
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed font-bold text-xl text-red-500">
          Access a wide variety of educational resources anywhere.
        </p>
        <p className="lg:w-2/3 mx-auto leading-relaxed font-bold text-xl text-red-500">
          Select any of the resources below.
        </p>
      </div>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mb-40 ml-28">
        <div className=" ">
          <NavLink to="/login">
            <img src={softskills} alt="" />
          </NavLink>
          <p className="font-bold text-daintree-500 ">English</p>
        </div>

        <div className="">
          <NavLink to="/login">
            <img className="" src={science} alt="" />
          </NavLink>

          <p className="font-bold text-daintree-500">
            Science
          </p>
        </div>

        <div className="">
          <NavLink to="/login">
            <img src={math} alt="" />
          </NavLink>
          <p className="font-bold text-daintree-500">Mathematics</p>
        </div>

        <div className="">
          <NavLink to="/login">
            <img src={news} alt="" />
          </NavLink>

          <p className="font-bold text-daintree-500">
            Upcoming Examination dates and Educational Events
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeMidsec;
