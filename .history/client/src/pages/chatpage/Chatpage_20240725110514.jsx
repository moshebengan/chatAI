import { useRef } from "react";
import "./chatpage.css";
import { useEffect } from "react";
import NewPrompt from "../../components/newPrompt/NewPrompt";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import { IKImage } from "imagekitio-react";

const Chatpage = () => {
  const path = useLocation();

  const chatId = path.pathname.split("/").pop();


  const { isPending, error, data } = useQuery({
    queryKey: ["chat", chatId],
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
                <>
                  {message.img && (
                    <IKImage
                      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                      path={message.img}
                      height="300"
                      width="400"
                      transformation={[{ height: 300, width: 400 }]}
                      loading="lazy"
                      lgip={{ active: true, quality: 20 }}
                    />
                  )}
                  <div
                    key={index}
                    className={
                      message.role === "user" ? "message user" : "message"
                    }
                  >
                    <Markdown>{message.parts[0].text}</Markdown>
                  </div>
                </>
              ))}

          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
