import { Clock3, BookOpen, PlayCircle } from "lucide-react";
import Button from "../common/Button";

function TrainingCard({
  icon: Icon,
  title,
  description,
  questions,
  duration,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col">

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
        <Icon size={28} className="text-blue-600" />
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-semibold text-slate-800">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-slate-600 leading-6 flex-grow">
        {description}
      </p>

      {/* Details */}
      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-2 text-slate-600">
          <BookOpen size={18} />
          <span>{questions} Questions</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <Clock3 size={18} />
          <span>{duration}</span>
        </div>

      </div>

      {/* Button */}
      <Button className="w-full mt-8">
        <PlayCircle size={20} />
        <span className="ml-2">Start Assessment</span>
      </Button>

    </div>
  );
}

export default TrainingCard;