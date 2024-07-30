import { useRef } from "react";
import "./chatpage.css";
import { useEffect } from "react";
import NewPrompt from "../../components/newPrompt/NewPrompt";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";

const Chatpage = () => {
  const path = useLocation();

  const chatId = path.pathname.split("/").pop();

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div className="chatpage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message from ai</div>
          {isPending
            ? "Loading"
            : error
            ? "Something went wrong!"
            : data?.history?.map((message, index) => (
                <div key={index} className="message user">
                  <Markdown>
                    {message.parts[0].text}
                  </Markdown>
                </div>
              ))}

          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
