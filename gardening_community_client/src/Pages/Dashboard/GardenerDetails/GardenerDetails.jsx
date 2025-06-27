import React from "react";
import { useLoaderData } from "react-router";

const GardenerDetails = () => {
  const gardener = useLoaderData();

  console.log(gardener);

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={gardener.image}
            alt={gardener.name}
            className="w-40 h-40 rounded-full border-4 border-green-500 object-cover shadow-md"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-green-700 mb-1">
              {gardener.name}
            </h1>
            <p className="text-sm text-gray-500 mb-2">{gardener.location}</p>

            <div className=" space-y-2 text-sm text-gray-700">
              <p>
                <strong>Age:</strong> {gardener.age}
              </p>
              <p>
                <strong>Gender:</strong> {gardener.gender}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="capitalize">{gardener.status}</span>
              </p>
              <p>
                <strong>Total Tips Shared:</strong> {gardener.totalTips}
              </p>
              <p className="sm:col-span-2">
                <strong>Experience:</strong> {gardener.experience}
              </p>
            </div>

            <div className="mt-4">
              <h2 className="text-md font-semibold text-gray-800 mb-1">
                About
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {gardener.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenerDetails;
