import Header from './components/Header.jsx'
import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <div className='h-screen flex flex-col w-full'>
      <Header />
      <main className='h-screen'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
