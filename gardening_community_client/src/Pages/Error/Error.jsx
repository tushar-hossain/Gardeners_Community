import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="py-12 w-11/12 mx-auto text-center">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Oops!...</h1>
      <img
        className="mx-auto"
        src="https://i.ibb.co/FqYghHZ5/6325254.png"
        alt="error image"
      />
      <p className="text-xl md:text-2xl font-bold">Page {error.statusText}</p>
      <h3 className="text-xl font-bold">{error.error.message}</h3>
    </div>
  );
};

export default Error;
