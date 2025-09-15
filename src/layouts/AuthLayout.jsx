import { Outlet } from "react-router";
import { AuthProvider } from "../components/auth/AuthContext.jsx";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <div className="h-full w-full flex flex-col">
        <nav className="bg-slate-400 p-2 flex items-center justify-center">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </AuthProvider>
  );
};

export default AuthLayout;
