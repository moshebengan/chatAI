import { Link } from 'react-router-dom'
import './chatList.css'

const ChatList = () => {
  return (
    <div className='chatList'>
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/dashboard">Explore MOSES AI</Link>
      <Link to="/dashboard">Contact</Link>
      
    </div>
  )
}

export default ChatList
