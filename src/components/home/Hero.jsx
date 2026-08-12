import Button from "../common/Button";
import { APP_CONFIG } from "../../config/appConfig";

function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-3xl">

          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            🌍 {APP_CONFIG.coverage}
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-slate-800 leading-tight">
            Protect Our Business Through
            <span className="block text-blue-600">
              Cyber Security Awareness
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-600 leading-8">
            Welcome to the official{" "}
            <strong>{APP_CONFIG.portalName}</strong> developed for{" "}
            <strong>{APP_CONFIG.companyName}</strong>.
            This platform helps employees improve cybersecurity knowledge
            through interactive training and assessments.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition">
              Start Assessment
            </button>

            <button className="border border-slate-300 hover:bg-slate-100 px-7 py-3 rounded-lg font-semibold transition">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;