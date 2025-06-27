import React from "react";
import { NavLink } from "react-router";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#123316]">
      <footer className="w-11/12 footer mx-auto sm:footer-horizontal p-10 rounded-lg text-white">
        <nav>
          <h6 className="footer-title">Contact info</h6>
          <p>
            <span>Phone: </span> +880 1700-000000
          </p>
          <p>
            <span>Email: </span> help@billmanagerdemo.com
          </p>
          <p>
            <span>Address: </span> 44/B North Avenue, Gulshan, Dhaka,
            Bangladesh.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Links</h6>
          <NavLink to="/about-us">About us</NavLink>
          <NavLink to="/browse-tips">Browse Tips</NavLink>
          <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare className="cursor-pointer" size={30} />
            </a>

            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube className="cursor-pointer" size={30} />
            </a>
            <a href="https://x.com/" target="_blank">
              {" "}
              <FaTwitter className="cursor-pointer" size={30} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
