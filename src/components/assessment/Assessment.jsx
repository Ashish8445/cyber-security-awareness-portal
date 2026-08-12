import { useEffect, useMemo, useState } from "react";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";

const QUESTION_TIME = 60;
const PASSING_SCORE = 70;

const questions = [
  {
    question: "Which of the following is the best practice to protect against phishing emails?",
    options: [
      "Click every link to verify legitimacy",
      "Open attachments from unknown senders",
      "Verify the sender and avoid clicking unexpected links",
      "Share your password to confirm access",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the primary goal of multi-factor authentication (MFA)?",
    options: [
      "To reduce software updates",
      "To add an extra layer of verification",
      "To replace antivirus software",
      "To bypass login restrictions",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which action is most appropriate when you receive a suspicious USB drive at work?",
    options: [
      "Plug it in to inspect files",
      "Report it and avoid using it",
      "Share it with coworkers",
      "Keep it in your desk drawer",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the safest way to handle a password?",
    options: [
      "Reuse it on multiple accounts",
      "Write it on a sticky note",
      "Use a unique strong password and manager",
      "Share it with a trusted colleague",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which is a common sign of a malicious website?",
    options: [
      "A valid SSL certificate",
      "A misspelled domain name or suspicious URL",
      "Fast page loading speed",
      "A professional layout",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does ransomware typically do?",
    options: [
      "Encrypts files and demands payment",
      "Speeds up internet browsing",
      "Deletes browser cache",
      "Updates software automatically",
    ],
    correctAnswer: 0,
  },
  {
    question: "Why should software patches be applied promptly?",
    options: [
      "To increase CPU usage",
      "To fix security vulnerabilities",
      "To reduce file size",
      "To stop antivirus alerts",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which is the best practice for public Wi-Fi use?",
    options: [
      "Use it for sensitive banking without protection",
      "Avoid sensitive transactions and use VPN when possible",
      "Disable all firewalls",
      "Share your login details with the network",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is social engineering?",
    options: [
      "A method of creating encryption keys",
      "Manipulating people into revealing confidential information",
      "A way to update antivirus definitions",
      "A type of firewall rule",
    ],
    correctAnswer: 1,
  },
  {
    question: "Why is data backup important?",
    options: [
      "To reduce storage space",
      "To recover from ransomware or system failure",
      "To hide files from detection",
      "To slow down network traffic",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which of these is a strong password?",
    options: ["password123", "P@ssw0rd!", "Welcome2024", "JohnDoe"],
    correctAnswer: 1,
  },
  {
    question: "What should you do if you suspect your account has been compromised?",
    options: [
      "Ignore it and continue working",
      "Change your password immediately and review account activity",
      "Share your password with support",
      "Delete the account",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of endpoint protection software?",
    options: [
      "To lock your keyboard",
      "To detect and block malicious activity on devices",
      "To replace system backups",
      "To stop browser updates",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a safe email practice?",
    options: [
      "Open all attachments immediately",
      "Verify the sender and check links before clicking",
      "Reply to urgent requests without checking",
      "Forward internal emails to personal accounts",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is a VPN mainly used for?",
    options: [
      "To increase file download speed",
      "To encrypt traffic over a network",
      "To remove malware automatically",
      "To replace user authentication",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which action helps reduce password theft?",
    options: [
      "Using the same password everywhere",
      "Enabling MFA and using a password manager",
      "Saving passwords in plain text files",
      "Sharing passwords with IT staff",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the main risk of clicking unknown shortened links?",
    options: [
      "They always improve performance",
      "They may redirect to malicious websites",
      "They update your browser faster",
      "They are always from trusted sources",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a common sign of a credential stuffing attack?",
    options: [
      "Multiple failed logins from unusual locations",
      "Automatic software updates",
      "A clean antivirus report",
      "Increased battery life",
    ],
    correctAnswer: 0,
  },
  {
    question: "What should you do before downloading software from the internet?",
    options: [
      "Check the source and verify it is legitimate",
      "Download from any random pop-up",
      "Disable your antivirus",
      "Accept all default settings without review",
    ],
    correctAnswer: 0,
  },
  {
    question: "Why is user awareness training important in cyber security?",
    options: [
      "It reduces human mistakes that lead to security incidents",
      "It eliminates all cyber threats",
      "It replaces all technical security controls",
      "It prevents all software bugs",
    ],
    correctAnswer: 0,
  },
];

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};

function Assessment() {
  const [screen, setScreen] = useState("instructions");
  const [agreed, setAgreed] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [result, setResult] = useState(null);

  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const unansweredCount = questions.length - answeredCount;

  useEffect(() => {
    document.title = `Timer: ${timeLeft}`;

    if (screen !== "quiz") return;

    if (timeLeft <= 0) {
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion((prev) => prev + 1);
    setTimeLeft(QUESTION_TIME);
  } else {
    handleSubmit();
  }

  return;
}

    const timer = window.setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [screen, currentQuestion, timeLeft]);

  const handleStartAssessment = () => {
    if (!agreed) return;
    setCurrentQuestion(0);
    setTimeLeft(QUESTION_TIME);
    setScreen("quiz");
  };

  const handleAnswerSelect = (optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex,
    }));
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setTimeLeft(QUESTION_TIME);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(QUESTION_TIME);
      return;
    }

    setScreen("review");
  };

  const handleJumpToQuestion = (index) => {
    setCurrentQuestion(index);
    setTimeLeft(QUESTION_TIME);
  };

  const handleSubmit = () => {
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach((question, index) => {
    const selected = answers[index];

    if (selected === undefined) {
      unanswered += 1;
    } else if (selected === question.correctAnswer) {
      correct += 1;
    } else {
      incorrect += 1;
    }
  });

  const score = Math.round((correct / questions.length) * 100);
  const passed = score >= PASSING_SCORE;

  setResult({
    totalQuestions: questions.length,
    correct,
    incorrect,
    unanswered,
    score,
    passed,
    timeRemaining: timeLeft,
  });

  localStorage.setItem(
    "assessmentResult",
    JSON.stringify({
      completed: true,
      score,
      passed,
      correct,
      incorrect,
      unanswered,
      completedDate: new Date().toLocaleDateString(),
    })
  );

    setScreen("result");
  };

  const handleReviewAgain = () => {
  setAnswers({});
  setCurrentQuestion(0);
  setTimeLeft(QUESTION_TIME);
  setResult(null);
  setScreen("quiz");
};

  const returnToDashboard = () => {
    window.location.href = "/dashboard";
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      {screen === "instructions" && (
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
              <h1 className="text-3xl font-bold text-white">
                Cyber Security Awareness Assessment
              </h1>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">Total Questions</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {questions.length}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">Duration</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {Math.ceil((questions.length * QUESTION_TIME) / 60)} mins
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">Passing Score</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {PASSING_SCORE}%
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">Per Question</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {QUESTION_TIME}s
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-slate-800 mb-4">
                  Important Instructions
                </h2>
                <ul className="space-y-3 text-slate-700">
                  <li>• Each question has a 60 second timer.</li>
                  <li>• The timer resets for every question.</li>
                  <li>• The system automatically moves to the next question when time expires.</li>
                  <li>• You can review and edit your answers before submission.</li>
                  <li>• A passing score of {PASSING_SCORE}% is required.</li>
                </ul>
              </div>

              <label className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-slate-700">
                  I have read and understood the instructions and am ready to begin the assessment.
                </span>
              </label>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={handleStartAssessment}
                  disabled={!agreed}
                  className={`px-6 py-3 rounded-xl font-semibold transition ${
                    agreed
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  Begin Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {screen === "quiz" && currentQuestionData && (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Assessment
              </p>
              <h2 className="text-2xl font-bold text-slate-900">
                Cyber Security Awareness Quiz
              </h2>
            </div>

            <div className="bg-red-500 text-white p-5 rounded-xl text-4xl font-bold">
  {timeLeft}
</div>
          </div>

          <div className="grid xl:grid-cols-[1.7fr_0.8fr] gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
              <ProgressBar
  currentQuestion={currentQuestion}
  totalQuestions={questions.length}
/>

              <div className="p-6 border rounded-xl bg-white">
  <h2 className="text-xl font-bold mb-4">
    Question {currentQuestion + 1}
  </h2>

  <p className="mb-6">
    {currentQuestionData.question}
  </p>

  <div className="space-y-3">
    {currentQuestionData.options.map((option, index) => (
      <button
        key={index}
        onClick={() => handleAnswerSelect(index)}
        className={`w-full text-left p-3 rounded-lg border ${
          answers[currentQuestion] === index
            ? "bg-blue-600 text-white"
            : "bg-white hover:bg-slate-100"
        }`}
      >
        {option}
      </button>
    ))}
  </div>
</div>

              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className={`px-5 py-2.5 rounded-lg font-medium border transition ${
                    currentQuestion === 0
                      ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  Previous
                </button>

                <div className="flex items-center gap-3">
                  {currentQuestion < questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-5 py-2.5 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setScreen("review")}
                      className="px-5 py-2.5 rounded-lg font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition"
                    >
                      Review Answers
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              
            </div>
          </div>
        </div>
      )}

      {screen === "review" && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-slate-900 px-6 py-5">
              <h2 className="text-2xl font-bold text-white">
                Review Your Answers
              </h2>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">Answered Questions</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {answeredCount}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">Not Answered</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {unansweredCount}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">Time Remaining</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {formatTime(timeLeft)}
                  </p>
                </div>
              </div>

              

              <div className="mt-8 flex flex-col sm:flex-row justify-between gap-3">
                <button
                  type="button"
                  onClick={handleReviewAgain}
                  className="px-5 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 font-medium"
                >
                  Review Again
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-medium"
                >
                  Submit Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {screen === "result" && result && (
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div
              className={`px-8 py-6 ${result.passed ? "bg-emerald-600" : "bg-red-600"}`}
            >
              <h1 className="text-3xl font-bold text-white">
                {result.passed ? "Assessment Passed" : "Assessment Failed"}
              </h1>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-5 gap-4 mb-8">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">Total Questions</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {result.totalQuestions}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">Correct</p>
                  <p className="text-2xl font-bold text-emerald-600">
                    {result.correct}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">Incorrect</p>
                  <p className="text-2xl font-bold text-red-600">
                    {result.incorrect}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">Not Answered</p>
                  <p className="text-2xl font-bold text-amber-600">
                    {result.unanswered}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">Final Score</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {result.score}%
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                  <span>Result</span>
                  <span>{result.score}%</span>
                </div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${result.passed ? "bg-emerald-500" : "bg-red-500"}`}
                    style={{ width: `${result.score}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
                <div className="text-lg font-medium">
                  Status:{" "}
                  <span
                    className={result.passed ? "text-emerald-600" : "text-red-600"}
                  >
                    {result.passed ? "PASS" : "FAIL"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={returnToDashboard}
                  className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition"
                >
                  Return Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Assessment;