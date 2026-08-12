import { ShieldCheck, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { APP_CONFIG } from "../../config/appConfig";

function DashboardHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("rememberMe");

    navigate("/login", { replace: true });
  };

  return (
    <div className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Employee Dashboard
          </h1>

          <p className="text-slate-500 mt-1">
            {APP_CONFIG.portalName}
          </p>
        </div>

        <div className="flex items-center gap-4">

          {/* Secure Portal */}
          <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-xl">
            <ShieldCheck className="text-blue-600" size={24} />

            <span className="font-medium text-blue-700">
              Secure Portal
            </span>
          </div>

          {/* Logout */}
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
    </div>
  );
}

export default DashboardHeader;