import { useEffect, useState } from 'react';
import ChatBox from './components/Chatbox/Chatbox.component';
import Groups from './components/Groups/Groups.component';
import { sendGroupNum, sendMessage } from './utils/socket.utils';
const App = ({ socket }) => {
  // const [message, setMessage] = useState('');
  // const [messageReceived, setMessageReceived] = useState('');
  // const [groupNum, setGroupNum] = useState('');
  
  // const messageHandler = () => {
  //   sendMessage(message, groupNum, socket);
  // }

  // const groupHandler = () => {
  //   sendGroupNum(groupNum, socket);
  // }

  // useEffect(() =>{
  //   socket.on('receive_message', (data) => {
  //     setMessageReceived(data.message)
  //   })
  // }, [socket]);

  return (
    <div>
        {/* <ChatBox /> */}
        <Groups />
    </div>
  );
}

export default App;


// Hello
//         <input onChange={(event) => {
//           setMessage(event.target.value)
//         }}/>
//         <button onClick={messageHandler}>Send message</button>
//         <input onChange={(event) => {
//           setGroupNum(event.target.value)
//         }}/>
//         <button onClick={groupHandler}>Set room</button>
//         <h1>Message:{messageReceived}</h1>