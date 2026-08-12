import logo from "../../assets/images/company-logo.jpeg";
import {
  ShieldCheck,
  Globe,
  Lock,
  CheckCircle,
} from "lucide-react";
import { APP_CONFIG } from "../../config/appConfig";

function LoginBanner() {
  return (
    <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white p-12 flex-col justify-center">

      {/* Company Logo */}
      <img
        src={logo}
        alt={APP_CONFIG.companyName}
        className="w-44 mb-10"
      />

      {/* Portal Title */}
      <h1 className="text-4xl font-bold leading-tight">
        Cyber Security
        <br />
        Awareness Portal
      </h1>

      <p className="mt-4 text-blue-100 text-lg">
        Annual Security Awareness Assessment 2026
      </p>

      {/* Description */}
      <p className="mt-8 text-blue-100 leading-8 text-base">
        Welcome to the official Cyber Security Awareness Portal for
        <strong className="text-white">
          {" "}
          {APP_CONFIG.companyName}
        </strong>
        .
        <br />
        <br />
        Complete your mandatory cybersecurity awareness assessment to
        strengthen our organization's security posture and help protect
        company information across all global offices.
      </p>

      {/* Features */}
      <div className="mt-12 space-y-5">

        <div className="flex items-center gap-4">
          <CheckCircle size={22} />
          <span>Annual Security Awareness Assessment</span>
        </div>

        <div className="flex items-center gap-4">
          <ShieldCheck size={22} />
          <span>Phishing & Email Security Training</span>
        </div>

        <div className="flex items-center gap-4">
          <Lock size={22} />
          <span>Password & Data Protection Best Practices</span>
        </div>

        <div className="flex items-center gap-4">
          <Globe size={22} />
          <span>Supporting All Global Offices</span>
        </div>

      </div>

      {/* Bottom Box */}
      <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">

        <h3 className="font-semibold text-lg">
          Why complete this assessment?
        </h3>

        <p className="mt-3 text-blue-100 leading-7">
          This assessment helps employees recognize cyber threats,
          reduce security risks, and support compliance with the
          organization's information security policies.
        </p>

      </div>

    </div>
  );
}

export default LoginBanner;