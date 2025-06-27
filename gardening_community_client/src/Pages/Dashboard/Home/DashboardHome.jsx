import React from "react";
import { useEffect, useState } from "react";
import { Package, Boxes, User2 } from "lucide-react";
import Chart from "./BarChart/BarChart";

export default function DashboardOverview() {
  const [stats, setStats] = useState([]);
  const [myTips, setMyTips] = useState([]);

  useEffect(() => {
    // Fetch my tips
    fetch(
      "https://gardening-community-server-gamma.vercel.app/email-tips/tusharsu97@gmail.com"
    )
      .then((res) => res.json())
      .then((data) => {
        setMyTips(data);
      });

    // Fetch all gardeners
    fetch("https://gardening-community-server-gamma.vercel.app/all-gardeners")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      });
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 mb-8 text-black m-5">
        {/* Total Items */}
        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <Boxes className="w-10 h-10 text-green-600" />
          <div>
            <h3 className="text-lg font-semibold">Total Items</h3>
            <p className="text-2xl font-bold">{stats.length}</p>
          </div>
        </div>

        {/* My Items */}
        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <Package className="w-10 h-10 text-green-600" />
          <div>
            <h3 className="text-lg font-semibold">My Items</h3>
            <p className="text-2xl font-bold">{myTips.length}</p>
          </div>
        </div>

        {/* Role */}
        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <User2 className="w-10 h-10 text-green-600" />
          <div>
            <h3 className="text-lg font-semibold">Role</h3>
            <p className="text-xl">Gardener</p>
          </div>
        </div>
      </div>
      {/* rechart */}
      <div className="text-black m-5">
        <h1 className="text-3xl font-semibold my-3 text-primary">Gardening Tips</h1>
        <p className="mb-3 text-gray-500">
          Track how many tips you’ve shared with the community each.
        </p>
        <Chart stats={stats} />
      </div>
    </div>
  );
}
