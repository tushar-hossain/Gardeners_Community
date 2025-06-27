import React from "react";
import { useLoaderData } from "react-router";

const EventDetails = () => {
  const eventData = useLoaderData();

  console.log(eventData);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={eventData.image}
        alt={eventData.title}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
      />
      <h1 className="text-3xl font-bold text-green-700 mb-2">
        {eventData.title}
      </h1>
      <p className="text-gray-500 mb-4">
        {eventData.date} at {eventData.time}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <p>
            <strong>📍 Location:</strong> {eventData.location}
          </p>
          <p>
            <strong>👥 Capacity:</strong> {eventData.capacity}
          </p>
          <p>
            <strong>🎫 Price:</strong>{" "}
            {typeof eventData.price === "number"
              ? `BDT ${eventData.price}`
              : eventData.price}
          </p>
        </div>
        <div>
          <p>
            <strong>🏷️ Tags:</strong> {eventData.tags.join(", ")}
          </p>
          <p>
            <strong>👤 Hosted by:</strong> {eventData.host}
          </p>
          <p>
            <strong>📧 Contact:</strong> {eventData.contactEmail}
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">{eventData.description}</p>
    </div>
  );
};

export default EventDetails;
