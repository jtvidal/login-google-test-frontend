import { Link } from "react-router";
import { useState, useContext } from "react";
import { AuthContext } from "../../../services/auth.context.js";
import { useNavigate } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);

  const handleOnChange = (e) => {
    try {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    } catch (error) {
      console.error("Error handling input change:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setFormData({
        ...formData,
      });
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        const dataErrors = {};
        if (data.errors) {
          data.errors.forEach((e) => {
            dataErrors[e.field] = e.message;
          });
          console.log(dataErrors);
        }
        setErrors(dataErrors);
        throw new Error(data.message);
      } else {
        console.log("User logged in successfully:", data);
        saveToken(data.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      setErr(error.message);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-full mt-4">
      <h2>LOGIN</h2>
      <form
        action=""
        method="post"
        className="flex flex-col gap-2 m-5 border p-5 rounded border-slate-300"
        onSubmit={handleLogin}
      >
        {err && <p className="text-red-500 text-sm">{err}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleOnChange}
          className="border-[1px] rounded border-slate-200"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleOnChange}
          className="border-[1px] rounded border-slate-200"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
        <button
          type="submit"
          className="p-2 bg-slate-500 text-slate-50 rounded cursor-pointer hover:bg-slate-300 hover:text-slate-700 duration-100"
        >
          login
        </button>
        <div className="self-center">
          <button
            className="cursor-pointer hover:underline"
            onClick={() =>
              (window.location.href = `${
                import.meta.env.VITE_BACKEND_URL
              }/auth/google`)
            }
          >
            Login with Google
          </button>
        </div>
      </form>
      <p>
        You don't have an account?
        <Link to={"/auth/register"} className="text-blue-800">
          {" "}
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
