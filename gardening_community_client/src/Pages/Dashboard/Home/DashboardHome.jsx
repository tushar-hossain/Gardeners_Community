import { useEffect, useState } from "react";
import { Package, Boxes, User2 } from "lucide-react"; // Icon imports

export default function DashboardOverview() {
  const [stats, setStats] = useState([]);
  const [myTips, setMyTips] = useState([]);

  useEffect(() => {
    // Fetch stats and user (replace with actual data)
    fetch(
      "https://gardening-community-server-gamma.vercel.app/email-tips/tusharsu97@gmail.com"
    )
      .then((res) => res.json())
      .then((data) => {
        setMyTips(data);
      });
    // Fetch stats and user (replace with actual data)
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

      <div className="bg-white shadow rounded-xl p-6 text-black m-5">
        <h3 className="text-xl font-semibold mb-2">Logged-in User</h3>
        <p>
          <strong>Name:</strong> {}
        </p>
        <p>
          <strong>Email:</strong> {}
        </p>
      </div>
    </div>
  );
}
