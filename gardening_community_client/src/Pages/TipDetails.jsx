import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AiOutlineLike } from "react-icons/ai";

const TipDetails = () => {
  const { id } = useParams();
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch(
      `https://gardening-community-server-gamma.vercel.app/public-tips/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
      });
  }, [id, tips]);

  const handelLiked = (id) => {
    fetch(`https://gardening-community-server-gamma.vercel.app/tips/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then(() => {});
  };

  return (
    <div className="py-12 w-11/12 mx-auto">
      <div className="flex justify-center items-center">
        {tips.map((tip) => {
          const {
            _id,
            selectLevel,
            category,
            availability,
            title,
            plant,
            description,
            email,
            name,
            photo,
            like,
          } = tip || {};

          return (
            <div key={_id} className="bg-secondary p-3 rounded-lg">
              <div className="text-white hover:text-primary text-center space-y-1">
                <img
                  className="bg-primary p-2 w-50 h-50 mx-auto rounded-lg"
                  src={photo}
                  alt="images"
                />
                <p>
                  <span className="font-bold"> Name: </span>
                  {name}
                </p>
                <p>
                  <span className="font-bold">Email: </span>
                  {email}
                </p>
              </div>
              <div className="space-y-1 text-white hover:text-primary text-left mt-5 px-4">
                <h1>
                  <span className="font-bold">Title: </span>
                  {title}
                </h1>
                <p>
                  <span className="font-bold">Plant: </span>
                  {plant}
                </p>
                <p>
                  <span className="font-bold">Difficulty Level: </span>
                  {selectLevel}
                </p>
                <p>
                  <span className="font-bold">Category: </span>
                  {category}
                </p>
                <p>
                  <span className="font-bold">Availability: </span>
                  {availability}
                </p>
                <p>
                  <span className="font-bold">Description: </span>
                  {description}
                </p>
              </div>

              <div className="px-4 text-white mt-5">
                <button
                  onClick={() => handelLiked(_id, tip)}
                  className="flex items-center gap-5 cursor-pointer"
                >
                  <AiOutlineLike size={30} /> <span>{like}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TipDetails;
