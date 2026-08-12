import { APP_CONFIG } from "../../config/appConfig";
import { Mail, Globe, ShieldCheck } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold">
              {APP_CONFIG.companyName}
            </h3>

            <p className="mt-3 text-slate-300 leading-7">
              {APP_CONFIG.portalName}
            </p>

            <p className="text-slate-400 mt-2">
              Awareness • Assessment • Compliance
            </p>
          </div>

          {/* Managed By */}
          <div>
            <h3 className="text-lg font-semibold">
              Program Owner
            </h3>

            <p className="mt-3">
              {APP_CONFIG.owner}
            </p>

            <p className="text-slate-300">
              {APP_CONFIG.designation}
            </p>
          </div>

          {/* Support */}
          <div>

            <h3 className="text-lg font-semibold">
              IT Support
            </h3>

            <div className="flex items-center gap-2 mt-4">
              <Mail size={18} />
              <span>it@spireresearch.com</span>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <Globe size={18} />
              <span>{APP_CONFIG.coverage}</span>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <ShieldCheck size={18} />
              <span>Version {APP_CONFIG.version}</span>
            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400 text-sm">
          © {APP_CONFIG.year} {APP_CONFIG.companyName}. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;