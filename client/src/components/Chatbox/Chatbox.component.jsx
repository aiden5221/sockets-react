import { Container } from "@chakra-ui/react";

const ChatBox = () => {

    return(
        <Container 
            maxW='md'
            centerContent
            minH='md'
            backgroundColor='teal.400'
            borderRadius='1rem'
            marginTop='1vh'
        >
            Hello
            <br/>
            Hello
        </Container>
    )
}

export default ChatBox;