import { dashboardData } from "../../data/dashboardData";

function ProgressCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mt-8">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-semibold text-slate-800">
          Assessment Progress
        </h2>

        <span className="font-bold text-blue-600">
          {dashboardData.progress}%
        </span>

      </div>

      <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">

        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${dashboardData.progress}%` }}
        />

      </div>

    </div>
  );
}

export default ProgressCard;