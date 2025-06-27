import React, { use, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { AuthContext } from "../../../AuthContext/AuthContext";

const UpdateTips = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const { users } = use(AuthContext);
  const [selectLevel, setSelectLevel] = useState(data.selectLevel);
  const [category, setCategory] = useState(data.category);
  const [availability, setAvailability] = useState(data.availability);
  const [tips, setTips] = useState(data);

  const handelUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());

    const tips = { selectLevel, category, availability, ...obj };

    Swal.fire({
      title: "Do you want to update the tips?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Update",
      denyButtonText: `Don't update`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(
          `https://gardening-community-server-gamma.vercel.app/tips/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(tips),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              tips._id = data.modifiedCount;
              toast.success("Successfully updated tips.");
              setTips(tips);
            }
          });

        Swal.fire("Update!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not update", "", "info");
      }
    });
  };

  return (
    <div className="px-5">
      <div>
        <form
          onSubmit={handelUpdate}
          className="bg-secondary py-8 px-15 rounded-lg mt-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* title */}
            <div>
              <label htmlFor="title" className="text-sm">
                Title
              </label>
              <input
                type="text"
                defaultValue={tips.title}
                name="title"
                placeholder="Enter title"
                className="w-full text-black rounded-md p-2 bg-base-100"
              />
            </div>
            {/* Plant Type */}
            <div>
              <label htmlFor="plant" className="text-sm">
                Plant Type
              </label>
              <input
                type="text"
                defaultValue={tips.plant}
                name="plant"
                placeholder="Enter plant"
                className="w-full text-black rounded-md p-2 bg-base-100"
              />
            </div>
            {/*  Difficulty Level */}
            <div>
              <label htmlFor="level" className="text-sm">
                Difficulty Level
              </label>
              <select
                onChange={(e) => setSelectLevel(e.target.value)}
                defaultValue={tips.selectLevel}
                className="select w-full text-black rounded-md p-2 bg-base-100"
              >
                <option disabled={true} selected>
                  Difficulty Level
                </option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            {/* Description */}
            <div>
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <input
                type="text"
                defaultValue={tips.description}
                name="description"
                placeholder="Enter description"
                className="w-full text-black rounded-md p-2 bg-base-100"
              />
            </div>

            {/* Category */}
            <div className="">
              <label htmlFor="username" className="text-sm">
                Category
              </label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={tips.category}
                className="select w-full text-black rounded-md p-2 bg-base-100"
              >
                <option disabled={true} selected>
                  Select Category
                </option>
                <option value="Composting">Composting</option>
                <option value="Plant Care">Plant Care</option>
                <option value="Vertical Gardening">Vertical Gardening</option>
              </select>
            </div>
            {/* Availability */}
            <div>
              <label htmlFor="availability" className="text-sm">
                Availability
              </label>
              <select
                onChange={(e) => setAvailability(e.target.value)}
                defaultValue={tips.availability}
                className="select w-full text-black rounded-md p-2 bg-base-100"
              >
                <option disabled={true} selected>
                  Availability
                </option>
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
              </select>
            </div>

            {/* email */}
            <div>
              <label htmlFor="email" className="text-sm">
                User Email
              </label>
              <input
                type="email"
                value={users.email}
                readOnly
                name="email"
                placeholder="Enter email"
                className="w-full text-black rounded-md p-2 bg-base-100"
              />
            </div>

            {/* user name */}
            <div>
              <label htmlFor="name" className="text-sm">
                User Email
              </label>
              <input
                type="text"
                value={users.displayName}
                readOnly
                name="name"
                placeholder="Enter name"
                className="w-full text-black rounded-md p-2 bg-base-100"
              />
            </div>
          </div>
          {/* photo url */}
          <div>
            <label htmlFor="photo" className="text-sm">
              Image URL
            </label>
            <input
              type="text"
              defaultValue={tips.photo}
              name="photo"
              placeholder="Enter photo"
              className="w-full text-black rounded-md p-2 bg-base-100"
            />
          </div>
          <input
            className="p-2 dark:bg-primary rounded-lg w-full text-black cursor-pointer mt-5"
            type="submit"
            value="Update Tips"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateTips;
