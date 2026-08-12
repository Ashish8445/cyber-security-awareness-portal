import DashboardHeader from "../components/dashboard/DashboardHeader";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import AssessmentStatus from "../components/dashboard/AssessmentStatus";
import ProgressCard from "../components/dashboard/ProgressCard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <WelcomeCard />
        <AssessmentStatus />
        <ProgressCard />
      </main>
    </div>
  );
}

export default Dashboard;