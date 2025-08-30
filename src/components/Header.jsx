import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-400 p-2 flex items-center justify-center'>
        <nav>
            <ul className='flex gap-4'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/auth/login">Login</a></li>
                <li><a href="/auth/register">Register</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header