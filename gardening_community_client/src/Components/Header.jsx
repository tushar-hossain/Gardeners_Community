import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";

const Header = ({ event }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-secondary md:px-12 md:py-3 p-2">
      <div className="slider-container px-5 py-2">
        <Slider {...settings}>
          {/* slider  */}
          {event.map((events) => {
            return (
              <div
                key={events._d}
                className="border-5 border-primary p-3 rounded-lg"
              >
                <div className="h-[25%] md:h-[30%] lg:h-[60%] flex justify-between items-center ">
                  <div className="text-primary space-y-3 text-left px-2 py-2 flex-1">
                    <h3 className="text-xl md:text-3xl font-bold text-white">
                      <Typewriter
                        cursor
                        cursorBlinking
                        delaySpeed={1000}
                        deleteSpeed={25}
                        loop={0}
                        typeSpeed={75}
                        words={[events.title]}
                      />
                    </h3>
                    <div className="hidden md:block space-y-3 ">
                      <p className="text-gray-300 text-sm">
                        {events.description}
                      </p>

                      <Link to={`/event/${events._id}`}>
                        <button className="btn btn-primary">Join Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1">
                    <img
                      src={events.image}
                      alt=""
                      className="h-[25%] md:h-[30%] lg:h-[60%] rounded-lg"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Header;
