import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full mt-4">
      <h2>REGISTER</h2>
      <form
        action=""
        method="post"
        className="flex flex-col gap-2 w-8/10 sm:w-3/5 md:w-1/3 border p-5 rounded border-slate-300"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border-[1px] rounded border-slate-200"
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          className="border-[1px] rounded border-slate-200"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-[1px] rounded border-slate-200"
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name="pass"
          id="pass"
          className="border-[1px] rounded border-slate-200"
        />
        <label htmlFor="role">Role</label>
        <select className="border-[1px] rounded border-slate-200 p-1 mb-3" name="role" id="role">
          <option value="user">Client</option>
          <option value="admin">Establishment</option>
        </select>
        <button type="submit" className="p-2 bg-slate-500 text-slate-50 rounded cursor-pointer hover:bg-slate-300 hover:text-slate-700 duration-100">register</button>
      </form>
      <Link to={"/auth/login"}>Login</Link>
    </div>
  );
};

export default Register;
