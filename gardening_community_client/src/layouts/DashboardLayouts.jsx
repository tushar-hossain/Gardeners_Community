import React, { use } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { Fence, Flower, Flower2 } from "lucide-react";
import { AuthContext } from "../AuthContext/AuthContext";
import GardenersLogo from "../Pages/shared/GardenersLogo/GardenersLogo";
import { toast } from "react-toastify";
import { FaRegLightbulb } from "react-icons/fa";

const DashboardLayouts = () => {
  const { users, logOutUser } = use(AuthContext);

  const handelLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Sign-out successful.");
      })
      .catch(() => {
        toast.success("Please try again.");
      });
  };
  return (
    <div className="drawer lg:drawer-open text-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar bg-secondary">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <GardenersLogo />
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <button className="btn btn-primary" onClick={handelLogOut}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current text-gray-100"
                >
                  <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                  <rect width="32" height="64" x="256" y="232"></rect>
                </svg>{" "}
                Logout
              </button>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-secondary min-h-screen w-60 p-4">
          {/* Sidebar content here */}
          <div className="bg-secondary font-semibold w-full text-primary">
            <h1 className="text-3xl text-center mb-10">Dashboard</h1>
          </div>
          <div className="flex-1">
            {/* home */}
            <li>
              <div className="flex items-center p-2 space-x-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-100"
                >
                  <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                </svg>
                <NavLink to="/dashboard">Home</NavLink>
              </div>
            </li>
            {/* All gardeners */}
            <li>
              <div className="flex items-center p-2 space-x-3 rounded-md">
                <Flower2 className="w-5 h-5 fill-current text-gray-100" />
                <NavLink to="/dashboard/all-gardeners">All Gardeners</NavLink>
              </div>
            </li>
            {/* add-gardener */}
            <li>
              <div className="flex items-center p-2 space-x-3 rounded-md">
                <Flower className="w-5 h-5 fill-current" />
                <NavLink to="/dashboard/add-gardener">Add Gardener</NavLink>
              </div>
            </li>

            {/* Share a Garden Tip */}
            <li>
              <div className="flex items-center p-2 space-x-3 rounded-md">
                <Fence className="w-5 h-5 fill-current dark:text-gray-100" />
                <NavLink to="/dashboard/share-garden">
                  Share a Garden Tip
                </NavLink>
              </div>
            </li>
            {/* logout */}
            <li>
              <div className="flex items-center p-2 space-x-3 rounded-md">
                <FaRegLightbulb className="w-5 h-5 fill-current dark:text-gray-100" />
                <NavLink to="/dashboard/my-tips">My Tips</NavLink>
              </div>
            </li>
          </div>
          {/* profile */}
          <div>
            <li>
              <div className="flex items-center p-2 space-x-4 justify-self-end">
                <img
                  src={users?.photoURL}
                  alt=""
                  className="w-12 h-12 rounded-lg dark:bg-gray-500"
                />
                <div>
                  <h2 className="text-lg font-semibold">
                    {users?.displayName}
                  </h2>
                  <span className="flex items-center space-x-1">
                    <Link
                      to="/dashboard/userProfile"
                      className="text-xs hover:underline dark:text-gray-600"
                    >
                      View profile
                    </Link>
                  </span>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayouts;
