import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
  
  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className='orbital'/>
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
              <div className="bg">
              </div>
            </div>
          <img src="/bot.png" alt="" className='botimg' />
          <div className="chat">
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
