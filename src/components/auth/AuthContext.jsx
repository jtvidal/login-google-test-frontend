import { useState, useEffect } from "react";
import { AuthContext } from "../../../services/auth.context.js";
import { useNavigate } from "react-router";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const saveToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    navigate("/");
  };

  const removeToken = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};
