import { Link } from "react-router";

const Login = () => {
  
  return (
    <div className="flex flex-col justify-center items-center h-full mt-4">
      <h2>LOGIN</h2>
      <form action="" method="post" className="flex flex-col gap-2 m-5 border p-5 rounded border-slate-300">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="border-[1px] rounded border-slate-200" />
        <label htmlFor="pass">Password</label>
        <input type="password" name="pass" id="pass" className="border-[1px] rounded border-slate-200" />
        <button type="submit" className="p-2 bg-slate-500 text-slate-50 rounded cursor-pointer hover:bg-slate-300 hover:text-slate-700 duration-100">login</button>
      </form>
      <Link to={'/auth/register'}>Register</Link>
    </div>
  );
};

export default Login;
