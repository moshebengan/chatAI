import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="top">
        <div className="left"></div>
        <div className="right">
          <img src="/bot.png" alt="" />
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Homepage
