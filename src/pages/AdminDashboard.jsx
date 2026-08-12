import { useEffect, useMemo, useState } from "react";
import { LogOut, Search, Filter } from "lucide-react";
import { currentUser } from "../data/user";

function AdminDashboard() {
  const [assessmentResult, setAssessmentResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const loadResult = () => {
      const savedResult = localStorage.getItem("assessmentResult");

      if (savedResult) {
        try {
          setAssessmentResult(JSON.parse(savedResult));
        } catch (error) {
          console.error("Failed to load assessment result:", error);
          setAssessmentResult(null);
        }
      } else {
        setAssessmentResult(null);
      }
    };

    loadResult();

    window.addEventListener("focus", loadResult);
    window.addEventListener("pageshow", loadResult);

    return () => {
      window.removeEventListener("focus", loadResult);
      window.removeEventListener("pageshow", loadResult);
    };
  }, []);

  const hasCompleted = Boolean(
    assessmentResult && assessmentResult.completed
  );

  const totalUsers = hasCompleted ? 1 : 0;
  const completedUsers = hasCompleted ? 1 : 0;
  const notStartedUsers = hasCompleted ? 0 : 1;

  const passedUsers =
    hasCompleted && assessmentResult.passed ? 1 : 0;

  const failedUsers =
    hasCompleted && !assessmentResult.passed ? 1 : 0;

  const currentStatus = hasCompleted
    ? assessmentResult.passed
      ? "passed"
      : "failed"
    : "not-started";

  const filteredUser = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    const matchesSearch =
      !search ||
      currentUser.name.toLowerCase().includes(search) ||
      (currentUser.email &&
        currentUser.email.toLowerCase().includes(search));

    const matchesStatus =
      statusFilter === "all" || statusFilter === currentStatus;

    return matchesSearch && matchesStatus && (hasCompleted || statusFilter === "not-started");
  }, [
    searchTerm,
    statusFilter,
    currentStatus,
    hasCompleted,
  ]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("rememberMe");

    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Admin Dashboard
            </h1>

            <p className="mt-1 text-slate-500">
              Cyber Security Awareness Assessment Management
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Total Users
            </p>
            <p className="text-3xl font-bold text-slate-900 mt-2">
              {totalUsers}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Completed
            </p>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {completedUsers}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Not Started
            </p>
            <p className="text-3xl font-bold text-amber-600 mt-2">
              {notStartedUsers}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Passed
            </p>
            <p className="text-3xl font-bold text-emerald-600 mt-2">
              {passedUsers}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Failed
            </p>
            <p className="text-3xl font-bold text-red-600 mt-2">
              {failedUsers}
            </p>
          </div>

        </div>

        {/* Assessment Records */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

          {/* Section Header */}
          <div className="px-6 py-5 border-b border-slate-200">

            <h2 className="text-xl font-semibold text-slate-900">
              Assessment Records
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              User assessment results and attempt history
            </p>

          </div>

          {/* Search & Filter */}
          <div className="p-6 border-b border-slate-200">

            <div className="flex flex-col md:flex-row gap-4">

              {/* Search */}
              <div className="relative flex-1">

                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  placeholder="Search by user name or email..."
                  className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />

              </div>

              {/* Status Filter */}
              <div className="relative">

                <Filter
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />

                <select
                  value={statusFilter}
                  onChange={(event) =>
                    setStatusFilter(event.target.value)
                  }
                  className="appearance-none w-full md:w-52 rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-8 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="all">
                    All Status
                  </option>

                  <option value="passed">
                    Passed
                  </option>

                  <option value="failed">
                    Failed
                  </option>

                  <option value="not-started">
                    Not Started
                  </option>
                </select>

              </div>

            </div>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-50 border-b border-slate-200">

                <tr>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                    User
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                    Email
                  </th>

                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-600">
                    Attempts
                  </th>

                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-600">
                    Best Score
                  </th>

                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-600">
                    Latest Score
                  </th>

                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-600">
                    Status
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                    Last Attempt
                  </th>

                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-600">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredUser ? (

                  <tr className="border-b border-slate-100">

                    {/* User */}
                    <td className="px-6 py-5 font-medium text-slate-900">
                      {currentUser.name}
                    </td>

                    {/* Email */}
                    <td className="px-6 py-5 text-slate-600">
                      {currentUser.email || "Not Available"}
                    </td>

                    {/* Attempts */}
                    <td className="px-6 py-5 text-center text-slate-900 font-semibold">
                      {hasCompleted ? 1 : 0}
                    </td>

                    {/* Best Score */}
                    <td className="px-6 py-5 text-center">

                      {hasCompleted ? (
                        <span className="font-semibold text-slate-900">
                          {assessmentResult.score}%
                        </span>
                      ) : (
                        <span className="text-slate-400">
                          -
                        </span>
                      )}

                    </td>

                    {/* Latest Score */}
                    <td className="px-6 py-5 text-center">

                      {hasCompleted ? (
                        <span className="font-semibold text-slate-900">
                          {assessmentResult.score}%
                        </span>
                      ) : (
                        <span className="text-slate-400">
                          -
                        </span>
                      )}

                    </td>

                    {/* Status */}
                    <td className="px-6 py-5 text-center">

                      {hasCompleted ? (
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                            assessmentResult.passed
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {assessmentResult.passed
                            ? "Passed"
                            : "Failed"}
                        </span>
                      ) : (
                        <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-700">
                          Not Started
                        </span>
                      )}

                    </td>

                    {/* Last Attempt */}
                    <td className="px-6 py-5 text-slate-600">

                      {hasCompleted
                        ? assessmentResult.completedDate
                        : "-"}

                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-center">

                      {hasCompleted ? (
                        <button
                          type="button"
                          onClick={() => setShowResult(true)}
                          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                        >
                          View Result
                        </button>
                      ) : (
                        <span className="text-sm text-slate-400">
                          No Result
                        </span>
                      )}

                    </td>

                  </tr>

                ) : (

                  <tr>

                    <td
                      colSpan="8"
                      className="px-6 py-12 text-center"
                    >

                      <p className="text-slate-500 font-medium">
                        No matching records found
                      </p>

                      <button
                        type="button"
                        onClick={() => {
                          setSearchTerm("");
                          setStatusFilter("all");
                        }}
                        className="mt-2 text-sm text-blue-600 hover:underline"
                      >
                        Clear filters
                      </button>

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </main>

      {/* Result Modal */}
      {showResult && assessmentResult && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden">

            {/* Modal Header */}
            <div
              className={`px-6 py-5 ${
                assessmentResult.passed
                  ? "bg-emerald-600"
                  : "bg-red-600"
              }`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    Assessment Result
                  </h2>

                  <p className="text-white/80 mt-1">
                    {currentUser.name}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() => setShowResult(false)}
                  className="text-white text-3xl leading-none hover:text-white/70"
                >
                  ×
                </button>

              </div>

            </div>

            {/* Result Details */}
            <div className="p-6">

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">
                    Score
                  </p>

                  <p className="text-2xl font-bold text-slate-900 mt-1">
                    {assessmentResult.score}%
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">
                    Correct
                  </p>

                  <p className="text-2xl font-bold text-emerald-600 mt-1">
                    {assessmentResult.correct}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">
                    Incorrect
                  </p>

                  <p className="text-2xl font-bold text-red-600 mt-1">
                    {assessmentResult.incorrect}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">
                    Not Answered
                  </p>

                  <p className="text-2xl font-bold text-amber-600 mt-1">
                    {assessmentResult.unanswered}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">
                    Status
                  </p>

                  <p
                    className={`text-xl font-bold mt-2 ${
                      assessmentResult.passed
                        ? "text-emerald-600"
                        : "text-red-600"
                    }`}
                  >
                    {assessmentResult.passed
                      ? "PASSED"
                      : "FAILED"}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500">
                    Completed On
                  </p>

                  <p className="text-lg font-semibold text-slate-900 mt-2">
                    {assessmentResult.completedDate}
                  </p>
                </div>

              </div>

              {/* Progress */}
              <div className="mt-6">

                <div className="flex items-center justify-between text-sm text-slate-600 mb-2">

                  <span>
                    Final Score
                  </span>

                  <span>
                    {assessmentResult.score}%
                  </span>

                </div>

                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">

                  <div
                    className={`h-full ${
                      assessmentResult.passed
                        ? "bg-emerald-500"
                        : "bg-red-500"
                    }`}
                    style={{
                      width: `${assessmentResult.score}%`,
                    }}
                  />

                </div>

              </div>

              {/* Close */}
              <div className="flex justify-end mt-6">

                <button
                  type="button"
                  onClick={() => setShowResult(false)}
                  className="px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition"
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default AdminDashboard;