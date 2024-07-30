import { useEffect, useRef } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";

const NewPrompt = () => {
  const endRef = useRef();

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  
  return (
    <>
      <div className="endChat" ref={endRef}></div>
      <form action="" className="newForm">
        <Upload/>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
