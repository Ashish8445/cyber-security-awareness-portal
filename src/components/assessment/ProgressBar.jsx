function ProgressBar({
  currentQuestion,
  totalQuestions,
}) {
  const progress =
    ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div>

      <div className="flex justify-between mb-2">

        <span className="font-medium">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>

        <span className="font-semibold text-blue-600">
          {Math.round(progress)}%
        </span>

      </div>

      <div className="bg-slate-200 h-3 rounded-full">

        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>
  );
}

export default ProgressBar;