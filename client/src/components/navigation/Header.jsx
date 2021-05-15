import React from 'react';
import { NavLink } from "react-router-dom";




const Header = () => {
    return (
      <div>
        <header className="bg-spring-wood-500 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <NavLink className=" " to="/">
              <a className="flex title-font font-medium items-center text-red-500 mb-4 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl  text-red-500">Tessy Simps</span>
              </a>
            </NavLink>
            <nav className="md:ml-auto md:mr-auto  flex flex-wrap items-center font-bold text-daintree-500 text-xl justify-center">
              <NavLink className="" to="/">
                <a className="mr-5 hover:text-daintree-400">Home</a>
              </NavLink>
              <NavLink className="" to="/about">
                <a className="mr-5 hover:text-daintree-400">About Us</a>
              </NavLink>
            </nav>

            <button className="inline-flex items-center text-daintree bg-white border-4  border-daintree shadow-md py-2 px-3 focus:outline-none  hover:bg-daintree-400 hover:text-white rounded-lg font-bold mt-4 md:mt-0 mr-4">
              <NavLink className="" to="/login">
                Login
              </NavLink>
            </button>
            <button className="inline-flex items-center text-white bg-daintree-500 border-0 shadow-md py-3 px-3 focus:outline-none hover:bg-daintree-400 rounded-lg font-bold  mt-4 md:mt-0">
              <NavLink className="" to="/signup">
                Sign Up
              </NavLink>
            </button>
          </div>
        </header>
      </div>
    );
}

export default Header;
