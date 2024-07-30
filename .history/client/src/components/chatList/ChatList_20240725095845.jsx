import { Link } from "react-router-dom";
import "./chatList.css";
import { useQuery } from "@tanstack/react-query";

const ChatList = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials:"include"
      }).then((res) =>
        res.json(),
      ),
  })

  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/dashboard">Explore MOSES AI</Link>
      <Link to="/dashboard">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">

       {isPending ? "Loading..." : error ? "Something went wrong" : data?.map(chat => (
        <Link key={chat._id} to={`/dashboard/chats/${chat._id}`}>{chat.title}</Link>
       )) }
        
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
