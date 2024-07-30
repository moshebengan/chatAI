import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
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
              <img src="/bot.png" alt="" className="botimgSm" />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Human: We produce food for Mice",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Bot: We produce food for Hamsters",
                  1000,
                  "Human: We produce food for Guinea Pigs",
                  1000,
                  "Bot: We produce food for Chinchillas",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Homepage;
