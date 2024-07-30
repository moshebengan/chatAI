import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {

  
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/dashboard">Explore MOSES AI</Link>
      <Link to="/dashboard">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/dashboard">My chat title</Link>
        <Link to="/dashboard">My chat title</Link>
        <Link to="/dashboard">My chat title</Link>
        <Link to="/dashboard">My chat title</Link>
        <Link to="/dashboard">My chat title</Link>
        <Link to="/dashboard">My chat title</Link>
        <Link to="/dashboard">My chat title</Link>
        <Link to="/dashboard">My chat title</Link>
        <Link to="/dashboard">My chat title</Link>
        <Link to="/dashboard">My chat title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
            <span>Upgrade to MOSES AI Pro</span>
            <span>Get unlimited acces to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
