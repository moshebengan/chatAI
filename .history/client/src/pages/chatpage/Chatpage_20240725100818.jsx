import { useRef } from 'react'
import './chatpage.css'
import { useEffect } from 'react'
import NewPrompt from '../../components/newPrompt/NewPrompt'
import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'

const Chatpage = () => {

  const path = useLocation();

  console.log(path.pathname.split('/'))

  // const { isPending, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     fetch(`${import.meta.env.VITE_API_URL}/api/chats/${}`, {
  //       credentials:"include"
  //     }).then((res) =>
  //       res.json(),
  //     ),
  // })


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
          
        </div>
      </div>
    </div>
  )
}

export default Chatpage
