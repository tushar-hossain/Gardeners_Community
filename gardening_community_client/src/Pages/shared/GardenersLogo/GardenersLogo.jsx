import React from "react";
import gradeningLogo from "../../../assets/gardening-logo.png";
import { Link } from "react-router";
const GardenersLogo = () => {
  return (
    <div>
      <Link to="/">
        <div className="flex items-center">
          <img className="w-18" src={gradeningLogo} alt="brand logo" />
          <h1 className="font-bold hidden md:block">Gardening</h1>
        </div>
      </Link>
    </div>
  );
};

export default GardenersLogo;
