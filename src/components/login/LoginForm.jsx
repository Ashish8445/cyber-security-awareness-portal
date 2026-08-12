import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Button from "../common/Button";
import { currentUser, adminUser } from "../../data/user";

function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    const normalizedEmail = email.trim().toLowerCase();

    // Admin Login
    if (
      normalizedEmail === adminUser.email.toLowerCase() &&
      password === adminUser.password
    ) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          name: adminUser.name,
          email: adminUser.email,
          role: adminUser.role,
        })
      );

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }

      navigate("/admin");
      return;
    }

    // Employee Login
    if (
      normalizedEmail === currentUser.email.toLowerCase() &&
      password === "Employee@123"
    ) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          name: currentUser.name,
          email: currentUser.email,
          role: currentUser.role,
        })
      );

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }

      navigate("/dashboard");
      return;
    }

    // Invalid Login
    setError("Invalid email or password.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Email */}
      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Company Email
        </label>

        <div className="relative">
          <Mail
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@company.com"
            required
            className="w-full rounded-lg border border-slate-300 py-3 pl-12 pr-4 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Password
        </label>

        <div className="relative">
          <Lock
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
            className="w-full rounded-lg border border-slate-300 py-3 pl-12 pr-12 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">

        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />

          Remember Me
        </label>

        <button
          type="button"
          className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
          onClick={() => setError("Please contact IT support to reset your password.")}
        >
          Forgot Password?
        </button>

      </div>

      {/* Sign In */}
      <Button type="submit" className="w-full">
        Sign In
      </Button>

      {/* Security Notice */}
      <p className="text-center text-xs text-slate-500">
        This portal is intended for authorized employees only.
        All login activities are monitored for security purposes.
      </p>

    </form>
  );
}

export default LoginForm;