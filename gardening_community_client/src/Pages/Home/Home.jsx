import React, { Suspense, useEffect, useState } from "react";
import Header from "../../components/Header";
import { useLoaderData } from "react-router";
import gardenImg from "../../assets/content.png";
import ProjectGallery from "../../components/ProjectGallery";
import Loading from "../../components/Loading";

const Home = () => {
  const data = useLoaderData();
  const [tips, setTips] = useState([]);
  const [event, SetEvent] = useState([]);

  useEffect(() => {
    fetch("https://gardening-community-server-gamma.vercel.app/tips/like")
      .then((res) => res.json())
      .then((data) => setTips(data));

    fetch("https://gardening-community-server-gamma.vercel.app/events")
      .then((res) => res.json())
      .then((data) => SetEvent(data));
  }, []);

  return (
    <div>
      <section>
        <Suspense fallback={<Loading />}>
          <Header event={event} />
        </Suspense>
      </section>

      {/* Featured Gardeners section */}
      <section className="w-11/12 mx-auto">
        <h1 className="text-xl md:text-3xl lg:text-4xl text-primary font-bold my-8 text-center">
          Featured Gardeners
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((gardener) => {
            const { _id, image, name, description } = gardener || {};

            return (
              <div key={_id} className="bg-secondary p-3 rounded-lg">
                <img
                  className="bg-green-100 w-30 h-30 rounded-lg  p-2 mx-auto"
                  src={image}
                  alt="gardener image"
                />

                <div className="text-white  mt-5">
                  <h2 className="font-bold">{name}</h2>
                  <p className="text-gray-300 text-sm">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Top Trending Tips section */}
      <section className="w-11/12 mx-auto">
        <h1 className="text-xl md:text-3xl lg:text-4xl text-primary font-bold my-8 text-center">
          Top Trending Tips
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {tips.map((tip) => {
            const { _id, category, title, plant, availability, name, like } =
              tip || {};
            return (
              <div
                key={_id}
                className="bg-secondary text-white shadow-xl hover:shadow-2xl p-5 space-y-1 rounded-lg"
              >
                <h1 className="text-xl font-bold mb-3">{title}</h1>
                <p>
                  <span>Author : </span>
                  {name}
                </p>

                <p>
                  <span>plant : </span>
                  {plant}
                </p>

                <p>
                  <span>category : </span>
                  {category}
                </p>

                <p>
                  <span>availability : </span>
                  {availability}
                </p>

                <p>
                  <span>like : </span>
                  {like}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gardening Professionals section */}
      <section className="w-11/12 mx-auto">
        <div className="text-center">
          <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-primary my-8">
            Gardening Professionals
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-5 items-center my-10 px-10 py-5 rounded-lg bg-secondary">
          <p
            data-aos="fade-right"
            className="md:text-xl md:leading-10 text-white"
          >
            Find your favorite suppliers and gardening influencers. Keep up to
            date with their discounts, content, and seasonal horticulture
            reminders. If you are a business owner, our gardening community
            platform is an easy way to connect with your target customers. Post
            your discounts or upload images of your new inventory. Use hashtags
            to help customers find you. Connect with your customers today!
          </p>
          <img
            data-aos="fade-left"
            className="w-[400px]"
            src={gardenImg}
            alt="gardeners image"
          />
        </div>
      </section>

      {/* Project Gallery */}
      <section className="bg-secondary my-5">
        <h1 className="md:text-3xl lg:text-4xl font-bold text-center text-white py-10">
          Project <span className="text-primary">Gallery</span>
        </h1>
        <ProjectGallery />
      </section>
    </div>
  );
};

export default Home;
