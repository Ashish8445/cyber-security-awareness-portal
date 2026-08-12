import { Link } from "react-router-dom";
import Button from "./Button";
import { APP_CONFIG } from "../../config/appConfig";
import logo from "../../assets/images/company-logo.jpeg";

function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt={APP_CONFIG.companyName}
            className="h-8 w-auto"
          />

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              {APP_CONFIG.companyName}
            </h1>

            <p className="text-sm text-gray-500">
              {APP_CONFIG.portalName}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <nav>
          <ul className="flex items-center gap-8 text-slate-700 font-medium">

            <li className="cursor-pointer hover:text-blue-600">
              Home
            </li>

            <li className="cursor-pointer hover:text-blue-600">
              About
            </li>

            <li className="cursor-pointer hover:text-blue-600">
              Contact
            </li>

            <li>
              <Link to="/login">
  <Button>
    Login
  </Button>
</Link>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;