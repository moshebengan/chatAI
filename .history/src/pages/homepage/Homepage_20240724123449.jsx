import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="top">
        <div className="left">
          <h1>MOSES AI</h1>
          <h2>Supercharge your creativity and productivity</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <Link to="/dashboard">Get Started</Link>
        </div>
        <div className="right">
          <div className="imageContainer">
            <div className="bgContainer">
              <div className="bg"></div>
            </div>
            <img src="/bot.png" alt="" className="botimg" />
            <div className="chat">
              <img
                src={
                  typingStatus === "human1"
                    ? "/human1.jpeg"
                    : typingStatus === "human2"
                    ? "human2.jpeg"
                    : "/bot.png"
                }
                alt=""
                className="botimgSm"
              />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  `Human1: We produce food for Mice`,
                  2000,
                  () => {
                    setTypingStatus("bot");
                  },
                  `Bot: We produce food for Hamsters`,
                  2000,
                  () => {
                    setTypingStatus("human2");
                  },
                  `Human2: We produce food for Guinea Pigs`,
                  2000,
                  () => {
                    setTypingStatus("bot");
                  },
                  `Bot: We produce food for Chinchillas`,
                  2000,
                  () => {
                    setTypingStatus("human1");
                  },
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
                repeat={Infinity}
                omitDeletionAnimation={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link>Terms of Service</Link>
          <Link>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
