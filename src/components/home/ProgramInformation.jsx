import {
  Building2,
  Globe,
  User,
  Briefcase,
  ShieldCheck,
  BadgeInfo,
} from "lucide-react";

import { APP_CONFIG } from "../../config/appConfig";

function ProgramInformation() {
  const details = [
    {
      icon: <Building2 className="text-blue-600" size={22} />,
      label: "Organization",
      value: APP_CONFIG.companyName,
    },
    {
      icon: <Globe className="text-blue-600" size={22} />,
      label: "Coverage",
      value: APP_CONFIG.coverage,
    },
    {
      icon: <User className="text-blue-600" size={22} />,
      label: "Program Owner",
      value: APP_CONFIG.owner,
    },
    {
      icon: <Briefcase className="text-blue-600" size={22} />,
      label: "Role",
      value: APP_CONFIG.designation,
    },
    {
      icon: <ShieldCheck className="text-blue-600" size={22} />,
      label: "Portal",
      value: APP_CONFIG.portalName,
    },
    {
      icon: <BadgeInfo className="text-blue-600" size={22} />,
      label: "Version",
      value: APP_CONFIG.version,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-800">
            Program Information
          </h2>

          <p className="text-slate-500 mt-3">
            General information about the Cyber Security Awareness Portal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {details.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  {item.label}
                </p>

                <h3 className="font-semibold text-slate-800">
                  {item.value}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProgramInformation;