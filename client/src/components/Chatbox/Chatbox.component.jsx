import { Button, Container, InputGroup, Input, InputRightElement, VStack, StackDivider } from "@chakra-ui/react";
import { FiSend } from 'react-icons/fi'
import { useState, useEffect } from "react";
import { sendGroupNum, sendMessage } from "../../utils/socket.utils";
import Chat from "../Chat/Chat.component";

const ChatBox = ({socket}) => {
    const [message, setMessage] = useState('');
    const [receivedMessages, setReceivedMessages] = useState([]);
    
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    useEffect(() =>{
        sendGroupNum(1, socket);

        socket.on('receive_message', (data) => {
            // setMessage(data.message, 1, socket)
            setReceivedMessages(currentMessages => [...currentMessages, data.message]);

        })
    }, []);

    const messageHandler = () => {
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
                    receivedMessages.length !== 0 ? 
                    receivedMessages.map((receivedMessage) => {
                        console.log(receivedMessage)
                        return <Chat width='100%' msg={receivedMessage}/>
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