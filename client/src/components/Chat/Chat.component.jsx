import { Center, Text, Avatar, Flex, Box } from "@chakra-ui/react";

const Chat = (text, avatar) => {
  
    return( 
            <Flex width='100%' direction='row' justifyContent='flex-end'>
                <Center >
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iure voluptatum perferendis saepe quasi consequuntur. Eum minima voluptatum corrupti, aspernatur vel assumenda, possimus eos ex sed nobis ad natus debitis.
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
    )
}

export default Chat;