import { ClerkProvider } from '@clerk/clerk-react'
import './rootlayout.css'
import { Link, Outlet } from 'react-router-dom'
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const Rootlayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <div className='rootlayout'>
        <header>
            <Link to="/" className='logo'>
            <img src="/logo.png" alt="" />
            <span>MOSES AI</span>
            </Link>
            <div className="user">USER</div>
        </header>
        <main>
            <Outlet/>
        </main>
      
    </div>
    </ClerkProvider>
  )
}

export default Rootlayout
