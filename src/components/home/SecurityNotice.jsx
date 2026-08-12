import { Bell, CalendarDays } from "lucide-react";
import { securityNotice } from "../../data/securityNotice";

function SecurityNotice() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-8 shadow-sm">

          <div className="flex items-start gap-4">

            <div className="bg-blue-100 p-3 rounded-full">
              <Bell className="text-blue-600" size={28} />
            </div>

            <div className="flex-1">

              <h2 className="text-2xl font-semibold text-slate-800">
                IT Security Notice
              </h2>

              <h3 className="mt-3 text-lg font-medium text-blue-700">
                {securityNotice.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {securityNotice.message}
              </p>

              <div className="mt-6 flex items-center gap-2 text-red-600 font-medium">
                <CalendarDays size={20} />
                Assessment Due Date: {securityNotice.dueDate}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SecurityNotice;