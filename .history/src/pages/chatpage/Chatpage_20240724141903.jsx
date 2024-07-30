import { useRef } from 'react'
import './chatpage.css'
import { useEffect } from 'react'
import NewPrompt from '../../components/newPrompt/NewPrompt'

const Chatpage = () => {
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current.scrollIntoView({behavior: "smooth"})
  }, [])
  return (
    <div className='chatpage'>
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai fgsdgdsgs  dfsafasa sdfhdfhfdhfdd</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <NewPrompt/>
          <div ref={endRef}></div>
        </div>
      </div>
    </div>
  )
}

export default Chatpage
