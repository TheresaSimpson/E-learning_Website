import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useUserStore } from "../state/store";

const Form = () => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const history = useHistory();
  const setUser = useUserStore((state) => state.setUser);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { token } = await response.json();
    setState(token);
    history.push("/classroom");
  };

  return (
    <div className="bg-spring-wood-500 max-w-lg max-auto mx-auto w-100 p-8 md:p-12 my-20 rounded-lg shadow-2xl ">
      <div className=" container m-auto">
        <h2 className="font-bold text-2xl text-daintree-500">
          TESSY SIMPS E-LEARNING HUB
        </h2>
        <p className="font-medium text-daintree-500 pt-2">
          Sign up and start learning!
        </p>
      </div>
      <div className="p-2">
        <hr />
      </div>
      <section className="mt-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6 pt-3 rounded bg-gray-200">
            <input
              className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 focus:border-gray-700"
              type="text"
              name="fullName"
              placeholder="Full name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 pt-3 rounded bg-gray-200">
            <input
              className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 focus:border-gray-700"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 pt-3 rounded bg-gray-200">
            <input
              className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 focus:border-gray-700 "
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 pt-3 rounded bg-gray-200">
            <input
              className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 focus:border-gray-700"
              type="password"
              name="confirmPassword"
              placeholder="Cornfirm Password"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-daintree hover:bg-daintree-400 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </section>
      <div className="max-w-lg mx-auto text-center mt-2">
        <p className="">
          Already have an account?
          <NavLink className="text-blue-700 text-md font-bold" to="/login">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Form;
