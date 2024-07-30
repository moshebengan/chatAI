import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="top">
        <div className="left">
          <h1>MOSES AI</h1>
          <h2>Supercharge your creativity and productivity</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <button>Get Started</button>
        </div>
        <div className="right">
          <div className="imageContainer">
          <img src="/bot.png" alt="" className='botimg' />
          <div className="robotIp">
          <img src="/bot.png" alt="" className='botimgSm' />
            Robot ip
          </div>
          </div>
          
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Homepage
