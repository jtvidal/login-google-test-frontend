import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";
import {jwtDecode} from "jwt-decode"

const RoleSelection = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [searchParams]);

  const handleRoleSelection = async (role) => {
    try {
      const token = localStorage.getItem("token");
      const { id } = jwtDecode(token);
      console.log("User id in RoleSelection: ", id);

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ role }),
        }
      );
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error in handleRoleSelection: ", error);
    }
  };
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="flex gap-4">
        <div className="p-3 bg-slate-500 rounded-sm">
          <button
            className="p-2 bg-slate-300 rounded-sm cursor-pointer"
            onClick={() => handleRoleSelection("client")}
          >
            Client
          </button>
        </div>
        <div className="p-3 bg-slate-500 rounded-sm">
          <button
            className="p-2 bg-slate-300 rounded-sm cursor-pointer"
            onClick={() => handleRoleSelection("establishment")}
          >
            Establishment
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
