import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  var settings = {
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
          {/* slider 1 */}
          <div>
            <div className="h-[25%] md:h-[30%] lg:h-[60%] bg-[url(https://i.ibb.co/zhX9rDc3/Community-Garden-Day.jpg)] bg-cover bg-center rounded-lg flex items-center justify-center">
              <div className="text-primary space-y-3 text-center px-2 py-2">
                <h3 className="md:text-3xl lg:text-4xl font-bold">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[" Community Garden Day - 2025"]}
                  />
                </h3>
                <p className="font-extrabold md:text-xl">
                  Friday, June 28 || 9:00 AM – 1:00 PM
                </p>
                <p className="md:text-xl">
                  <span className="md:font-bold">Topics: </span>Native plants,
                  composting, soil care
                </p>

                <div className="hidden md:block space-y-3 ">
                  <p className="text-xl">
                    <span className="font-bold">Activities: </span>Community
                    planting, live compost demo, eco-market
                  </p>
                  <p className="text-xl">
                    <span className="font-bold">Giveaways: </span>Free seed
                    packets, garden starter kits
                  </p>
                  <p className="font-bold text-xl">
                    Open for all ages – bring your family & friends!
                  </p>
                </div>

                <p className="md:text-xl">
                  <span className="md:font-bold">Location:</span> Greenview
                  Community Park, Dhaka
                </p>
              </div>
            </div>
          </div>
          {/* slider 2 */}
          <div>
            <div className="h-[25%] md:h-[30%] lg:h-[60%] bg-[url(https://i.ibb.co/Kz8HWbhG/Urban-Gardening-Workshop.jpg)] bg-cover bg-center rounded-lg flex items-center justify-center">
              <div className="text-primary space-y-3 text-center px-2 py-2">
                <h3 className="md:text-3xl lg:text-4xl font-bold">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[" Community Garden Day - 2025"]}
                  />
                </h3>
                <p className="font-extrabold md:text-xl">
                  Friday, June 28 || 9:00 AM – 1:00 PM
                </p>
                <p className="md:text-xl">
                  <span className="md:font-bold">Topics: </span>Native plants,
                  composting, soil care
                </p>

                <div className="hidden md:block space-y-3 ">
                  <p className="text-xl">
                    <span className="font-bold">Activities: </span>Community
                    planting, live compost demo, eco-market
                  </p>
                  <p className="text-xl">
                    <span className="font-bold">Giveaways: </span>Free seed
                    packets, garden starter kits
                  </p>
                  <p className="font-bold text-xl">
                    Open for all ages – bring your family & friends!
                  </p>
                </div>

                <p className="md:text-xl">
                  <span className="md:font-bold">Location:</span> Greenview
                  Community Park, Dhaka
                </p>
              </div>
            </div>
          </div>
          {/* slider 3 */}
          <div>
            <div className="h-[25%] md:h-[30%] lg:h-[60%] bg-[url(https://i.ibb.co/Xft2bmw7/Backyard-Garden-Bootcamp-Hands-On-Event.jpg)] bg-cover bg-center rounded-lg flex items-center justify-center">
              <div className="text-primary space-y-3 text-center px-2 py-2">
                <h3 className="md:text-3xl lg:text-4xl font-bold">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[" Community Garden Day - 2025"]}
                  />
                </h3>
                <p className="font-extrabold md:text-xl">
                  Friday, June 28 || 9:00 AM – 1:00 PM
                </p>
                <p className="md:text-xl">
                  <span className="md:font-bold">Topics: </span>Native plants,
                  composting, soil care
                </p>

                <div className="hidden md:block space-y-3 ">
                  <p className="text-xl">
                    <span className="font-bold">Activities: </span>Community
                    planting, live compost demo, eco-market
                  </p>
                  <p className="text-xl">
                    <span className="font-bold">Giveaways: </span>Free seed
                    packets, garden starter kits
                  </p>
                  <p className="font-bold text-xl">
                    Open for all ages – bring your family & friends!
                  </p>
                </div>

                <p className="md:text-xl">
                  <span className="md:font-bold">Location:</span> Greenview
                  Community Park, Dhaka
                </p>
              </div>
            </div>
          </div>
          {/* slider 4 */}
          <div>
            <div className="h-[25%] md:h-[30%] lg:h-[60%] bg-[url(https://i.ibb.co/VpSWwN8V/Family-Gardening-Fun-Day.jpg)] bg-cover bg-center rounded-lg flex items-center justify-center">
              <div className="text-primary space-y-3 text-center px-2 py-2">
                <h3 className="md:text-3xl lg:text-4xl font-bold">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[" Community Garden Day - 2025"]}
                  />
                </h3>
                <p className="font-extrabold md:text-xl">
                  Friday, June 28 || 9:00 AM – 1:00 PM
                </p>
                <p className="md:text-xl">
                  <span className="md:font-bold">Topics: </span>Native plants,
                  composting, soil care
                </p>

                <div className="hidden md:block space-y-3 ">
                  <p className="text-xl">
                    <span className="font-bold">Activities: </span>Community
                    planting, live compost demo, eco-market
                  </p>
                  <p className="text-xl">
                    <span className="font-bold">Giveaways: </span>Free seed
                    packets, garden starter kits
                  </p>
                  <p className="font-bold text-xl">
                    Open for all ages – bring your family & friends!
                  </p>
                </div>

                <p className="md:text-xl">
                  <span className="md:font-bold">Location:</span> Greenview
                  Community Park, Dhaka
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Header;
