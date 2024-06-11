import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full h-screen">
      <h1 className="font-bold text-4xl text-secondary">
        Page <span className="text-red-400">Not found</span>
      </h1>
      <Link to={"/"} className="text-blue-500 text-xl">
        Go to home route
      </Link>
    </div>
  );
};

export default NotFound;
