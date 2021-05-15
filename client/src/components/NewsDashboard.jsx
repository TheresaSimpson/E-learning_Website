import React from "react";
import News from "../components/News.json";

const NewsDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen mx-6 mb-6 shadow-lg">
      <div className="posts align-center ">
        {News.map((post) => {
          return (
            <div className="ml-9 mt-6 pt-6 top-shadow">
              <h1 className="font-bold text-xl ">{post.title}</h1>

              <p className="">{post.content}</p>
              <a href={post.site}>Read more...</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsDashboard;
