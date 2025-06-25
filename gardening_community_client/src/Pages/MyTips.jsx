import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTips = () => {
  const { users } = use(AuthContext);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch(
      `https://gardening-community-server-gamma.vercel.app/email-tips/${users.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
      });
  }, [users.email]);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete the tips?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
        fetch(
          `https://gardening-community-server-gamma.vercel.app/tips/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingTips = tips.filter((tip) => tip._id !== id);
              setTips(remainingTips);
            }
          });

        Swal.fire("Delete!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not delete", "", "info");
      }
    });
  };

  return (
    <div className="py-12 w-11/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Plant Type</th>
              <th>Difficulty Level</th>
              <th>Category</th>
              <th>Availability</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tips.map((tips) => {
              const {
                _id,
                selectLevel,
                category,
                availability,
                title,
                plant,
                email,
                name,
                photo,
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
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{title}</td>
                  <td>{plant}</td>
                  <td>{selectLevel}</td>
                  <td>{category}</td>
                  <td>{availability}</td>
                  <td className="flex gap-2">
                    <Link
                      to={`/update-tips/${_id}`}
                      className="btn bg-primary text-white"
                    >
                      <FaPen size={20} />
                    </Link>
                    <button
                      onClick={() => handelDelete(_id)}
                      className="btn bg-primary text-red-400"
                    >
                      <MdDelete size={20} />
                    </button>
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

export default MyTips;
