import { Outlet } from 'react-router-dom'
import ChatList from '../../components/chatList/ChatList'
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="menu"><ChatList/></div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
