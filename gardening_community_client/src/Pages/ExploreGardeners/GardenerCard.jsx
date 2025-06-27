export default function GardenerCard({ gardener }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
      <img
        src={gardener.profileImage}
        alt="Profile"
        className="w-24 h-24 rounded-full"
      />
      <h3 className="text-lg font-semibold mt-2">{gardener.name}</h3>
      <p className="text-sm text-gray-600">{gardener.location}</p>
      <p className="mt-2 text-xs">{gardener.bio}</p>
      <div className="flex flex-wrap gap-1 mt-3">
        {gardener?.interests.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
