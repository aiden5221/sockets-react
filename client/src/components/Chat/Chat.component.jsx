import { Center, Text, Avatar, Flex, Box } from "@chakra-ui/react";

const Chat = ({ msg, avatar, sent }) => {
    return( 
        <div>
            {
                sent ? 
                <Flex width='100%' minWidth='100%' direction='row' justifyContent='flex-start'>
                    <Box
                        marginRight='2%'
                    >
                        <Avatar 
                            size='xs' 
                            name='Dan Abrahmov' 
                            marginTop='10%'
                            src='https://bit.ly/dan-abramov' />
                    </Box>
                    <Center >
                        <Text>
                            {msg}
                        </Text>
                    </Center>
                </Flex>
            :
                
                <Flex width='100%' minWidth='100%' direction='row' justifyContent='flex-end'>
                    <Center >
                        <Text>
                            {msg}
                        </Text>
                    </Center>
                    <Box
                        marginLeft='2%'
                    >
                        <Avatar 
                            size='xs' 
                            name='Dan Abrahmov' 
                            marginTop='10%'
                            src='https://bit.ly/dan-abramov' />
                    </Box>
                </Flex>
            }
        </div>
            
    )
}

export default Chat;