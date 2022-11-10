import { Button, Container, InputGroup, Input, InputRightElement, VStack, StackDivider } from "@chakra-ui/react";
import { FiSend } from 'react-icons/fi'
import Chat from "../Chat/Chat.component";
const ChatBox = () => {



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
            >
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
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