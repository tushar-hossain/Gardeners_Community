import React, { use, useState } from "react";
import { AuthContext } from "../../../AuthContext/AuthContext";
import { toast } from "react-toastify";

const ShareGardenTip = () => {
  const { users } = use(AuthContext);
  const [selectLevel, setSelectLevel] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    const tips = { selectLevel, category, availability, ...obj, like: 0 };

    // share a garden tip
    fetch("https://gardening-community-server-gamma.vercel.app/tips", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(tips),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Share a Garden Tip Successfully Added.");
          e.target.reset();
        }
      });
  };

  return (
    <div className="p-5">
      <form
        onSubmit={handelSubmit}
        className="bg-secondary py-8 px-15 rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* title */}
          <div>
            <label htmlFor="title" className="text-sm">
              Title
            </label>
            <input
              type="text"
              required
              name="title"
              placeholder="Enter title"
              className="w-full rounded-md p-2 text-black bg-base-100"
            />
          </div>
          {/* Plant Type */}
          <div>
            <label htmlFor="plant" className="text-sm">
              Plant Type
            </label>
            <input
              type="text"
              required
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
              required
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
              required
              name="description"
              placeholder="Enter description"
              className="w-full text-black rounded-md p-2 bg-base-100"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="text-sm">
              Category
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              required
              className="select text-black w-full rounded-md p-2 bg-base-100"
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
              required
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
            required
            name="photo"
            placeholder="Enter photo"
            className="w-full rounded-md text-black p-2 bg-base-100"
          />
        </div>
        <input
          className="p-2 dark:bg-primary rounded-lg w-full cursor-pointer mt-5"
          type="submit"
          value="Add Tips"
        />
      </form>
    </div>
  );
};

export default ShareGardenTip;
