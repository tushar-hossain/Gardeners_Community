import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import projectImg1 from "../assets/1.jpg";
import projectImg2 from "../assets/2.jpg";
import projectImg3 from "../assets/3.jpg";
import projectImg4 from "../assets/4.jpg";

const ProjectGallery = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="w-11/12 mx-auto px-10">
      <Slider {...settings}>
        <div>
          <div>
            <img
              className="mx-auto rounded-lg"
              src={projectImg1}
              alt="project gallery image"
            />
            <div className="mt-5 text-center">
              <h2 className="text-2xl text-white">Lawn Mower</h2>
              <p className="text-primary mb-5">Garden Care, Gardening & Lawn</p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div>
          <div>
            <img
              className="mx-auto rounded-lg"
              src={projectImg2}
              alt="project gallery image "
            />
            <div className="mt-5 text-center">
              <h2 className="text-2xl text-white">Parking Cleaning</h2>
              <p className="text-primary mb-5">Garden Care, Snow Removal</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div>
            <img
              className="mx-auto rounded-lg"
              src={projectImg3}
              alt="project gallery image"
            />
            <div className="mt-5 text-center">
              <h2 className="text-2xl text-white">Wooden Decks</h2>
              <p className="text-primary mb-5">Garden Care, Snow Removal</p>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div>
            <img
              className="mx-auto rounded-lg"
              src={projectImg4}
              alt="project gallery image"
            />
            <div className="mt-5 text-center">
              <h2 className="text-2xl text-white">Leaf Cutting</h2>
              <p className="text-primary mb-5">Snow Removal</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ProjectGallery;
