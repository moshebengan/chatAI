import { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";
import { IKImage } from 'imagekitio-react';

const NewPrompt = () => {

  const [img, setImg] = useState({
    isLoading: false,
    error:"",
    dbData:{}
  })

  const endRef = useRef();

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  
  return (
    <>
      <div className="endChat" ref={endRef}></div>
      <form action="" className="newForm">
        <Upload setImg={setImg}/>
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
