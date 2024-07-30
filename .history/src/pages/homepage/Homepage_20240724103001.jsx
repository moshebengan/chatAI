import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="top">
        <div className="left"></div>
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
