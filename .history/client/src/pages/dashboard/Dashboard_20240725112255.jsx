import { QueryClient, useMutation } from "@tanstack/react-query";
import "./dashboard.css";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const queryClient = new QueryClient()
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (text) => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        credentials:"include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
    },
    onSuccess: (id) => {
      console.log('id fetched from mutation ', id)
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['userChats'] })
      navigate(`/dashboard/chats/${id}`)
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;

    
    mutation.mutate(text)
  };

  return (
    <div className="dashboard">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>MOSES AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create a new Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
