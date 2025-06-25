import React from "react";

const AboutUs = () => {
  return (
    <div className="py-12 w-11/12 mx-auto">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">🌱 About Us</h1>
        <p>
          Welcome to Gardening Community — your digital gardening companion!
        </p>
        <p>
          At Gardening Community, we believe that gardening is more than just a
          hobby — it's a way of life. Whether you're growing tomatoes on your
          balcony, starting a compost bin, or creating a lush vertical garden,
          we’re here to guide, inspire, and connect gardeners from all walks of
          life.
        </p>
      </div>
      <div className="space-y-2 mt-8">
        <h1 className="text-2xl font-bold">🌿 Our Mission</h1>
        <p>
          To empower individuals through practical, sustainable, and
          community-driven gardening knowledge that transforms homes, cities,
          and lives — one plant at a time.
        </p>
      </div>
      <div className="space-y-2 mt-8">
        <h1 className="text-2xl font-bold">🌼 What We Offer</h1>
        <li>
          Community-Shared Tips: Learn directly from experienced gardeners
          through real-life stories and how-tos.
        </li>
        <li>
          Active Gardener Profiles: Meet and explore gardeners across the
          country — see their expertise, tips, and journey.
        </li>
        <li>
          Private Tip Sharing: Want to keep your secrets safe or share only with
          selected groups? We’ve got you.
        </li>
        <li>
          Top Trending Tips: Stay updated with what’s growing fast — literally
          and figuratively.
        </li>
        <li>
          Like & Support Features: Encourage others by showing love to their
          tips.
        </li>
      </div>

      <div className=" font-semibold mt-8 text-center">
        <address> Thank you for growing with us! 💚</address>
        <address> The Gardening Community Team</address>
      </div>
    </div>
  );
};

export default AboutUs;
