function StatCard({
  title,
  value,
  color = "blue",
}) {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    amber: "bg-amber-100 text-amber-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <div
        className={`inline-block mt-4 px-4 py-2 rounded-lg font-semibold ${colors[color]}`}
      >
        {value}
      </div>

    </div>
  );
}

export default StatCard;