import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { FaEye } from "react-icons/fa6";

const BrowseTips = () => {
  const data = useLoaderData();
  const [selectLevel, setSelectLevel] = useState("");
  const [tips, setTips] = useState(data);

  useEffect(() => {
    const tipsFilter = data.filter((tip) => tip.selectLevel === selectLevel);

    if (selectLevel === "") {
      setTips(tips);
    } else {
      setTips(tipsFilter);
    }
  }, [data, selectLevel]);

  return (
    <div className="py-12 w-11/12 mx-auto">
      <div className="flex items-center gap-5 mb-10">
        <h1 className="text-xl md:text-2xl font-bold">
          Select Difficulty Level:{" "}
        </h1>
        <select
          onChange={(e) => setSelectLevel(e.target.value)}
          className="select w-2/3"
        >
          <option disabled={true} selected>
            Select option
          </option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Plant Type</th>
              <th>Difficulty Level</th>
              <th>Category</th>
              <th>Availability</th>
              <th>See More</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tips.map((tips) => {
              const {
                _id,
                title,
                plant,
                category,
                availability,
                photo,
                selectLevel,
              } = tips || {};

              return (
                <tr key={_id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={photo} alt="gardeners image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{title}</td>
                  <td>{plant}</td>
                  <td>{selectLevel}</td>
                  <td>{category}</td>
                  <td>{availability}</td>
                  <td className="btn bg-primary text-white">
                    <Link to={`/tip-details/${_id}`}>
                      <FaEye size={20} />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
