function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-xl font-semibold text-slate-800">
          Question {currentQuestion + 1} of {totalQuestions}
        </h2>

        <span className="text-blue-600 font-semibold">
          20:00
        </span>

      </div>

      <h3 className="text-xl font-medium text-slate-800 leading-8">
        {question.question}
      </h3>

      <div className="mt-8 space-y-4">

        {question.options.map((option, index) => (

          <label
            key={index}
            className="flex items-center gap-4 border rounded-xl p-4 hover:bg-slate-50 cursor-pointer transition"
          >

            <input
              type="radio"
              name="question"
            />

            <span>{option}</span>

          </label>

        ))}

      </div>

    </div>
  );
}

export default QuestionCard;