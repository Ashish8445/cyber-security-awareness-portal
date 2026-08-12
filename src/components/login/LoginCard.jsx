import LoginForm from "./LoginForm";
import { ShieldCheck } from "lucide-react";

function LoginCard() {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-50">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-10">

        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <ShieldCheck className="text-blue-600" size={36} />
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-center text-slate-800">
          Employee Login
        </h2>

        <p className="text-center text-slate-500 mt-3 mb-8">
          Sign in with your company credentials to access the Cyber Security Awareness Portal.
        </p>

        <LoginForm />

        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm text-slate-500">
            Authorized employees only.
          </p>

          <p className="text-xs text-slate-400 mt-2">
            Unauthorized access is prohibited and may be monitored.
          </p>
        </div>

      </div>

    </div>
  );
}

export default LoginCard;