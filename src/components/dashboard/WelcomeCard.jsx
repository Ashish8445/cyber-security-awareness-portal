import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserCircle2 } from "lucide-react";
import Button from "../common/Button";
import { currentUser } from "../../data/user";

function WelcomeCard() {
  const [assessmentResult, setAssessmentResult] = useState(null);

  useEffect(() => {
    const loadAssessmentResult = () => {
      const savedResult = localStorage.getItem("assessmentResult");

      if (savedResult) {
        try {
          setAssessmentResult(JSON.parse(savedResult));
        } catch (error) {
          console.error("Failed to read assessment result:", error);
          setAssessmentResult(null);
        }
      } else {
        setAssessmentResult(null);
      }
    };

    loadAssessmentResult();

    window.addEventListener("focus", loadAssessmentResult);
    window.addEventListener("pageshow", loadAssessmentResult);

    return () => {
      window.removeEventListener("focus", loadAssessmentResult);
      window.removeEventListener("pageshow", loadAssessmentResult);
    };
  }, []);

  const isCompleted =
    assessmentResult && assessmentResult.completed === true;

  const statusText = !isCompleted
    ? "Not Started"
    : assessmentResult.passed
      ? "Passed"
      : "Failed";

  const statusColor = !isCompleted
    ? "text-amber-600"
    : assessmentResult.passed
      ? "text-emerald-600"
      : "text-red-600";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">

        <div className="flex items-center gap-5">

          <div className="bg-white/20 rounded-full p-4">
            <UserCircle2 size={48} />
          </div>

          <div>

            <p className="uppercase tracking-wider text-blue-100 text-sm">
              2026 Annual Cyber Security Awareness Assessment
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Hello, {currentUser.name} 👋
            </h2>

            <p className="mt-4 text-blue-100 leading-7 max-w-3xl">
              Please complete your assigned Cyber Security Awareness
              Assessment. This assessment is designed to help strengthen
              cybersecurity knowledge and support a secure working
              environment across the organization.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <p className="text-sm text-slate-500">
            Assessment Status
          </p>

          <h3 className={`text-xl font-semibold mt-1 ${statusColor}`}>
            {statusText}
          </h3>

        </div>

        <Link to="/assessment">
          <Button className="px-8 py-3">
            {isCompleted ? "View Assessment" : "Begin Assessment"}
          </Button>
        </Link>

      </div>

    </div>
  );
}

export default WelcomeCard;