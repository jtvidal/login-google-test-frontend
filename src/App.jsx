import Header from "./components/common/Header.jsx";
import { Outlet } from "react-router";
import { AuthProvider } from "./components/auth/AuthContext.jsx";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="h-screen flex flex-col w-full">
        <Header />
        <main className="h-screen">
          <Outlet />
        </main>
        <footer>
          <div className="text-center p-3 bg-slate-200">
            © 2025 Google Auth Test. All rights reserved.
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
