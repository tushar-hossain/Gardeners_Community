import { useEffect, useState } from "react";
import GardenerCard from "./GardenerCard";

export default function ExploreGardeners() {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch(
      "https://gardening-community-server-gamma.vercel.app/explore-gardeners"
    )
      .then((res) => res.json())
      .then((data) => setGardeners(data));
  }, []);

  console.log(gardeners);

  return (
    <div className="w-11/12 py-12 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Explore Gardeners</h2>
      <p className="text-gray-600 mb-4">
        Explore gardeners from around the country who share their knowledge,
        tips, and love for plants. Connect, learn, and grow with a thriving
        gardening community.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gardeners.map((gardener) => (
          <GardenerCard key={gardener._id} gardener={gardener} />
        ))}
      </div>
    </div>
  );
}
