import Button from "../common/Button";
import {
  ClipboardList,
  Clock3,
  Trophy,
  RotateCcw,
  CalendarDays,
  PlayCircle,
} from "lucide-react";

import { assessmentInfo } from "../../data/assessmentInfo";

function AssessmentOverview() {
  const info = [
    {
      icon: <ClipboardList className="text-blue-600" size={24} />,
      label: "Questions",
      value: assessmentInfo.questions,
    },
    {
      icon: <Clock3 className="text-blue-600" size={24} />,
      label: "Duration",
      value: assessmentInfo.duration,
    },
    {
      icon: <Trophy className="text-blue-600" size={24} />,
      label: "Passing Score",
      value: assessmentInfo.passingScore,
    },
    {
      icon: <RotateCcw className="text-blue-600" size={24} />,
      label: "Attempts",
      value: assessmentInfo.attempts,
    },
    {
      icon: <CalendarDays className="text-blue-600" size={24} />,
      label: "Due Date",
      value: assessmentInfo.dueDate,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-10">

          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-800">
              {assessmentInfo.title}
            </h2>

            <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-7">
              {assessmentInfo.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">

            {info.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>

                <p className="text-sm text-slate-500">
                  {item.label}
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mt-2">
                  {item.value}
                </h3>
              </div>
            ))}

          </div>

          <div className="flex justify-center mt-12">
            <button>
              <PlayCircle size={20} />
              <spam className="ml-2">Start Assessment</spam>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AssessmentOverview;