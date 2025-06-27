import React from "react";
import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router";

const AllGardeners = () => {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((gardener) => {
          const {
            _id,
            name,
            age,
            gender,
            status,
            experience,
            image,
            location,
            totalTips,
            description,
          } = gardener || {};

          return (
            <div
              key={_id}
              className="bg-secondary p-3 rounded-lg flex flex-col h-full"
            >
              <img
                className="bg-green-100 p-2 w-30 h-30 rounded-lg mx-auto"
                src={image}
                alt="gardener image"
              />

              <div className="space-y-1 text-white text-left mt-5 px-2 flex-1">
                <h2 className="font-bold">{name}</h2>
                <p className="text-sm">{description}</p>
              </div>

              <div className="mt-2 px-2">
                <button className="btn btn-primary btn-block">Details</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllGardeners;
