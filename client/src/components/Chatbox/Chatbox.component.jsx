import { Button, Container, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { FiSend } from 'react-icons/fi'
import Chat from "../Chat/Chat.component";
const ChatBox = () => {



    return(
        <Container 
            maxW='md'
            centerContent
            minH='md'
            border='2px'
            borderColor='teal.400'
            borderRadius='1rem'
            marginTop='1vh'
            position='relative'
            
        >
            <Chat/>

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
                />
                <InputRightElement
                    width='4.5rem'
                >
                    <Button marginLeft='40%' size='sm'>
                        <FiSend />
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Container>
    )
}

export default ChatBox;