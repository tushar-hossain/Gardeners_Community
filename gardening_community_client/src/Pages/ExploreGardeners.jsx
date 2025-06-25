import React from "react";
import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router";

const ExploreGardeners = () => {
  const data = useLoaderData();

  return (
    <div className="py-12 w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
            <div key={_id} className="bg-secondary p-3 rounded-lg">
              <img
                className="bg-green-100 p-2 w-50 h-50 rounded-lg mx-auto"
                src={image}
                alt="gardeners image"
              />
              <div className="space-y-1 text-white hover:text-primary text-left mt-5 px-4">
                <Fade cascade>
                  <h2>
                    <span className="font-bold">Name: </span>
                    {name}
                  </h2>
                  <p>
                    <span className="font-bold">Gender: </span>
                    {gender}
                  </p>
                  <p>
                    <span className="font-bold">Age: </span>
                    {age}
                  </p>
                  <p>
                    <span className="font-bold">Status: </span>
                    {status}
                  </p>
                  <p>
                    <span className="font-bold">Location: </span>
                    {location}
                  </p>
                  <p>
                    <span className="font-bold">TotalTips: </span>
                    {totalTips}
                  </p>
                  <p>
                    <span className="font-bold">Experience: </span>
                    {experience}
                  </p>
                  <p>
                    <span className="font-bold">Description: </span>
                    {description}
                  </p>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreGardeners;
