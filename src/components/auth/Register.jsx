import { Link, useNavigate } from "react-router";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState({});

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

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setFormData({
        ...formData,
      });
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users`,
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
        throw new Error("Network response was not ok");
      } else {
        console.log("User registered successfully:", data);
        navigate("/auth/login");
      }
    } catch (error) {
      console.error("Error registering user:", error.code || error.message);
    }
  };
  return (
    <div className="flex flex-col items-center h-screen mt-4 gap-2 w-full">
      <h2>REGISTER</h2>
      <div className="flex flex-col border p-5 rounded border-slate-300 w-8/10 sm:w-6/10 md:w-1/3">
        <form
          className="flex flex-col gap-2"
          onSubmit={handleRegister}
          action=""
          method="post"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            className="border-[1px] rounded border-slate-200"
            onChange={handleOnChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            onChange={handleOnChange}
            className="border-[1px] rounded border-slate-200"
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm">{errors.lastname}</p>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleOnChange}
            className="border-[1px] rounded border-slate-200"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.pass}
            onChange={handleOnChange}
            className="border-[1px] rounded border-slate-200"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
          <label htmlFor="role">Role</label>
          <select
            className="border-[1px] rounded border-slate-200 p-1 mb-3"
            name="role"
            id="role"
            value={formData.role}
            onChange={handleOnChange}
          >
            <option value="">Select a role</option>
            <option value="client">Client</option>
            <option value="establishment">Establishment</option>
          </select>
          {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
          <button
            type="submit"
            className="p-2 bg-slate-500 text-slate-50 rounded cursor-pointer hover:bg-slate-300 hover:text-slate-700 duration-100"
          >
            register
          </button>
        </form>
        <div className="self-center mt-4">
          <button className="cursor-pointer hover:underline">
            Sign in with Google
          </button>
        </div>
      </div>
      <div>
        <p>
          Already have an account?
          <Link to={"/auth/login"} className="text-blue-800"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
