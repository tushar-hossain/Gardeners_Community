import React, { use } from "react";
import { AuthContext } from "../../../AuthContext/AuthContext";

const UserProfile = () => {
  const { users } = use(AuthContext);
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-64 mx-auto mt-10">
      <img
        src={users.photoURL}
        alt="Profile"
        className="w-24 h-24 rounded-full border-4 border-green-500 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold text-green-700">
        {users.displayName}
      </h2>
    </div>
  );
};

export default UserProfile;
