import { useEffect, useState } from "react";
import StatCard from "./StatCard";

function AssessmentStatus() {
  const [assessmentResult, setAssessmentResult] = useState(null);

  useEffect(() => {
    const savedResult = localStorage.getItem("assessmentResult");

    if (savedResult) {
      try {
        setAssessmentResult(JSON.parse(savedResult));
      } catch (error) {
        console.error("Failed to read assessment result:", error);
      }
    }
  }, []);

  const getStatus = () => {
    if (!assessmentResult) {
      return {
        value: "🟡 Not Started",
        color: "amber",
      };
    }

    if (assessmentResult.passed) {
      return {
        value: "🟢 Passed",
        color: "green",
      };
    }

    return {
      value: "🔴 Failed",
      color: "red",
    };
  };

  const status = getStatus();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

      <StatCard
        title="Assessment Status"
        value={status.value}
        color={status.color}
      />

      <StatCard
        title="Score"
        value={assessmentResult ? `${assessmentResult.score}%` : "Not Attempted"}
      />

      <StatCard
        title="Questions"
        value={
          assessmentResult
            ? assessmentResult.correct +
              assessmentResult.incorrect +
              assessmentResult.unanswered
            : "20"
        }
      />

      <StatCard
        title="Completed On"
        value={
          assessmentResult
            ? assessmentResult.completedDate
            : "Not Completed"
        }
        color={assessmentResult ? "green" : "red"}
      />

    </div>
  );
}

export default AssessmentStatus;