import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useUserStore } from "../state/store";

const Dashboard = () => {
  const logOut = useUserStore((state) => state.logOut);

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
                  <span className="text-sm font-medium">English</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-daintree-500 hover:text-blue-500"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                  <span className="text-sm font-medium">Science</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-daintree-500 hover:text-blue-500"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                  <span className="text-sm font-medium">Mathematics</span>
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
                      News and Upcoming Events
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
                  <span
                    className="text-sm font-medium"
                    onClick={() => logOut()}
                  >
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*Main Course section*/}
        <main className="w-full flex flex-col">
          {/*Header*/}
          <div className="border-b shadow-md h-20 rounded-tl-3xl flex px-6 py-2 items-center bg-spring-wood-500">
            <div className="flex ">
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
              <div className="ml-40   flex flex-wrap items-center ">
                <h1 className="font-bold text-daintree-500 text-2xl  font-serif">
                  E-Learning Resources
                </h1>
              </div>
            </div>
          </div>
          {/*Courses are listed here*/}
          <div className="px-6 py-4 flex-1 overflow-scroll-x bg-white mt-6 mx-6">
            {/*heading for courses*/}
            <h1 className="mb-6 text-bold text-3xl text-daintree-500 font-serif">
              Available Resources
            </h1>
            {/* section*/}

            {/*Each section*/}
            <div className="flex flex-col">
              <div className="">
                <h2 className="text-red-500 text-xl">
                  Click below to take a Quiz
                </h2>
                <NavLink to="/english">
                  <span className="font-bold text-md mr-2 font-sans">
                    BECE English 2019 OJECTIVES PAST QUESTIONS
                  </span>
                </NavLink>
              </div>
              <div className="font-semibold text-md mr-2 font-sans mt-10 text-xl">
                <h1 className="text-center underline font-bold">
                  Parts Of Speach
                </h1>
                <ul className="list-disc ">
                  <li>Noun</li>
                  <p className="text-md font-mono text-grey-darkest pt-1">
                    <p>
                      A noun is the name of a person, place, thing, or idea.
                    </p>
                    A noun is a word for a person, place, thing, or idea. Nouns
                    are often used with an article (the, a, an), but not always.
                    Proper nouns always start with a capital letter; common
                    nouns do not. Nouns can be singular or plural, concrete or
                    abstract. Nouns show possession by adding 's. Nouns can
                    function in different roles within a sentence; for example,
                    a noun can be a subject, direct object, indirect object,
                    subject complement, or object of a preposition.
                  </p>
                  <li className="mt-4">Pronoun</li>
                  <p className="text-md font-mono text-grey-darkest pt-1">
                    <p>A pronoun is a word used in place of a noun.</p>A pronoun
                    is a word used in place of a noun. A pronoun is usually
                    substituted for a specific noun, which is called its
                    antecedent. In the sentence above, the antecedent for the
                    pronoun she is the girl. Pronouns are further defined by
                    type: personal pronouns refer to specific persons or things;
                    possessive pronouns indicate ownership; reflexive pronouns
                    are used to emphasize another noun or pronoun; relative
                    pronouns introduce a subordinate clause; and demonstrative
                    pronouns identify, point to, or refer to nouns.
                  </p>

                  <li className="mt-4">Verb</li>
                  <p className="text-md font-mono text-grey-darkest pt-1">
                    <p>A verb expresses action or being.</p>
                    The verb in a sentence expresses action or being. There is a
                    main verb and sometimes one or more helping verbs. ("She can
                    sing." Sing is the main verb; can is the helping verb.) A
                    verb must agree with its subject in number (both are
                    singular or both are plural). Verbs also take different
                    forms to express tense.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
