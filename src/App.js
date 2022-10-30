import { io } from "socket.io-client";
import { useEffect, useState } from 'react';

const socket = io('http://localhost:3000/', {
  withCredentials: true,
}).connect();

const App = () => {
  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState('');

  const sendMessage = () => {
    socket.emit('send_message', { message } );
  };

  useEffect(() =>{
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message)
    })
  }, [socket]);

  return (
    <div>
        Hello
        <input onChange={(event) => {
          setMessage(event.target.value)
        }}/>
        <button onClick={sendMessage}>Send message</button>
        <h1>Message:{messageReceived}</h1>
    </div>
  );
}

export default App;
