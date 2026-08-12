import LoginBanner from "../components/login/LoginBanner";
import LoginCard from "../components/login/LoginCard";

function Login() {
  return (
    <div className="min-h-screen flex">
      <LoginBanner />
      <LoginCard />
    </div>
  );
}

export default Login;