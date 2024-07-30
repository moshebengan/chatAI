import '.rootlayout.css'
import { Link, Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div className='rootlayout'>
        <header>
            <Link to="/">
            <img src="/logo.png" alt="" />
            <span>MOSES AI</span>
            </Link>
        </header>
        <main>
            <Outlet/>
        </main>
      
    </div>
  )
}

export default Rootlayout
