// frontend/src/components/UrgencyScore.jsx
function UrgencyScore({ level }) {
  const color = {
    low: "bg-green-200 text-green-800",
    moderate: "bg-yellow-200 text-yellow-800",
    critical: "bg-red-200 text-red-800"
  }[level] || "bg-gray-200 text-gray-800";

  return (
    <div className={`text-center px-4 py-2 rounded-xl shadow-md font-bold text-xl ${color}`}>
      Urgency Level: {level.toUpperCase()}
    </div>
  );
}

export default UrgencyScore;
