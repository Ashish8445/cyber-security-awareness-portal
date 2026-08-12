function QuestionPalette({
  totalQuestions,
  currentQuestion,
  answers,
  setCurrentQuestion,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      <h3 className="font-semibold mb-5">
        Questions
      </h3>

      <div className="grid grid-cols-5 gap-3">

        {Array.from({ length: totalQuestions }).map((_, index) => {

          const answered =
            answers[index] !== undefined;

          return (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`h-11 rounded-lg font-semibold transition
              ${
                currentQuestion === index
                  ? "bg-blue-600 text-white"
                  : answered
                  ? "bg-green-500 text-white"
                  : "bg-slate-200 hover:bg-slate-300"
              }`}
            >
              {index + 1}
            </button>
          );

        })}

      </div>

    </div>
  );
}

export default QuestionPalette;