import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { io } from "socket.io-client";
import{ ChakraProvider } from '@chakra-ui/react';

const socket = io('http://localhost:3001/', {
  withCredentials: true,
}).connect();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
      <App socket={socket}/>
    </ChakraProvider>
);

