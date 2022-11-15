import { Button, Container, InputGroup, Input, InputRightElement, VStack, StackDivider } from "@chakra-ui/react";
import { FiSend } from 'react-icons/fi'
import { useState, useEffect } from "react";
import { sendGroupNum, sendMessage } from "../../utils/socket.utils";
import Chat from "../Chat/Chat.component";

const ChatBox = ({socket}) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);


    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    useEffect(() =>{
        sendGroupNum(1, socket);

        socket.on('receive_message', (data) => {
            // setMessage(data.message, 1, socket)
            setMessages(currentMessages => [...currentMessages, { msg: data.message, received: true }]);

        })
    }, []);

    const messageHandler = () => {
        setMessages(currentMessages => [...currentMessages, { msg: message, received: false }])
        sendMessage(message, 1, socket)
        
    }

    return(
        <Container 
            centerContent
            border='2px'
            borderColor='teal.400'
            borderRadius='1rem'
            position='relative'
            marginLeft='1vw'
            
        >
            <VStack
                divider={<StackDivider borderColor='gray.200'/>}
                spacing={4}
                align='stretch'
                overflowY='auto'
                marginBottom='15%'
                marginTop='2%'
                position='static'
                width='100%'
            >
                {
                    
                    messages.length !== 0 ? 
                    messages.map((receivedMessage) => {
                        console.log(messages)
                        return <Chat width='100%' msg={receivedMessage.msg} sent={receivedMessage.received}/>
                    })
                    : null
                }

            </VStack>
            <InputGroup
                borderColor='red.300'
                position='absolute'
                bottom='0'
                width='90%'
                marginBottom='2%'
            >
                <Input 
                    placeholder='Text'
                    borderColor='red.300'
                    variant='filled'
                    onChange={handleMessageChange}
                />
                <InputRightElement
                    width='4.5rem'
                >
                    <Button 
                        marginLeft='40%' 
                        size='sm'
                        onClick={messageHandler} >
                        <FiSend />
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Container>
    )
}

export default ChatBox;