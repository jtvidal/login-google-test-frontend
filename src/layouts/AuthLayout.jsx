import { Outlet } from "react-router"

const AuthLayout = () => {
  return (
    <div>
        <nav className='bg-slate-400 p-2 flex items-center justify-center'>
            <ul>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default AuthLayout