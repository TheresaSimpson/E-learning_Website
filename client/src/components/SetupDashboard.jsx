import React from "react";
import { Link, NavLink } from "react-router-dom";

const setupDashboard = () => {
  return (
    <div className="w-full border shadow bg-gray-100 mb-24">
      <div className="flex">
        {/*left section*/}
        <div className="min-h-screen flex flex-row bg-gray-100">
          <div className="flex flex-col w-60 bg-pearl-bush-500 rounded-r-3xl overflow-hidden">
            <div className="flex items-center justify-center h-20 shadow-md">
              <h1 className="text-2xl font-bold text-red-500">Resources</h1>
            </div>

            <ul className="flex flex-col py-4">
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-daintree-500 hover:text-blue-500"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                  <NavLink to="/">
                    <span className="text-sm font-medium">Home</span>
                  </NavLink>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-daintree-500 hover:text-blue-500"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                  <NavLink to="/calendar">
                    <span className="text-sm font-medium">Calender</span>
                  </NavLink>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-daintree-500 hover:text-blue-500"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                  <span className="text-sm font-medium">IT & Software</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-daintree-500 hover:text-blue-500"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                  <span className="text-sm font-medium">
                    Softskills/Personal Develoment
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-daintree-500 hover:text-blue-500"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>

                  <span className="text-sm font-medium">
                    Set Up your Workspace
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-daintree-500 hover:text-blue-500"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                  <NavLink to="/news">
                    <span className="text-sm font-medium">
                      New and Upcoming Events
                    </span>
                  </NavLink>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-daintree-500 hover:text-blue-500"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                  <span className="text-sm font-medium">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*Main Course section*/}
        <main className="w-full flex flex-col">
          {/*Header*/}
          <div className="border-b shadow-md h-20 rounded-tl-3xl flex px-6 py-2 items-center bg-spring-wood-500">
            <div className="flex flex-col">
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
                  <span className="ml-3 text-xl  text-red-500">
                    Tessy Simps
                  </span>
                </a>
              </NavLink>
            </div>

            {/*Search*/}
            <div className="ml-auto hidden md:block">
              <input
                type="search"
                placeholder="Search"
                className="border border-daintree rounded-lg p-2 shadow-md "
              />

              <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-16 right-0 pr-1 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 -mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/*Courses are listed here*/}
          <div className="px-6 py-4 flex-1 overflow-scroll-x bg-white mt-6 mx-6">
            {/*heading for courses*/}
            <h1 className="mb-6 text-bold text-3xl text-daintree-500 font-serif">
              Available Resources
            </h1>
            {/* section*/}

            <div className="flex flex-col text-xl">
              <h1 className="mb-2 text-bold text-2xl text-red-500 font-serif">
                Set Up your Workspace
              </h1>
              <p className="mb-4 ">
                Below are list of IDE's you can use to start your programming
                journey.
              </p>
              <h3 className="font-serif">What is an IDE?</h3>
              <p className="mb-2 ">
                An IDE, or Integrated Development Environment, enables
                programmers to consolidate the different aspects of writing a
                computer program. IDEs increase programmer productivity by
                combining common activities of writing software into a single
                application: editing source code, building executables, and
                debugging.
              </p>

              <p className="mt-2 font-serif ">Collection of Best IDEs</p>
              <ul className="list-disc ml-7 font-mono font-bold">
                <li>IntelliJ IDEA</li>
                <li>
                  <a href="https://code.visualstudio.com/download">
                    Visual Studio
                  </a>
                </li>
                <li> Eclipse</li>
                <li>RStudio</li>
                <li>WebStorm</li>
                <li>PhpStorm</li>
                <li>PyCharm</li>
                <li>NetBeans</li>
                <li>Xcode</li>
                <li>Visual LANSA</li>
              </ul>

              <div className="mt-9">
                <h3 className="font-serif">What is a Text Editor?</h3>
                <p className="mb-2 ">
                  A text editor is a software programme that allows users to manipulate create or manipulate plain text 
                  computer files.
                </p>

                <p className="mt-2 font-serif ">Collection of best Text Editors</p>
                <ul className="list-disc ml-7 font-mono font-bold">
                  <li>Sublime Text</li>
                  <li>Atom</li>
                  <li>Notepad++</li>
                  <li>TextMate</li>
                  <li>Vim</li>
                </ul>
              </div>
              <div className="mt-4">
              <p className="italic">NOTE: A code editor is a text editor that has some good features for writing code, and an IDE is something
              usually more complex that combines a couple of different tools together.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default setupDashboard;
