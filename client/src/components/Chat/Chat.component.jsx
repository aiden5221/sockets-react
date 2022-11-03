import { Wrap, WrapItem, Text, Avatar, Flex } from "@chakra-ui/react";

const Chat = (text, avatar) => {
  
    return(
            <Flex
                
            >
                <Wrap 
                    spacing='30px'
                    justifyContent='flex-end'
                >
                    <WrapItem>
                        <Text>
                           
                           dawd
                        </Text>
                    </WrapItem>
                    <WrapItem
                        float='right'
                        position='relative'
                    >
                        <Avatar 
                            size='xs' 
                            name='Dan Abrahmov' 
                            marginTop='10%'
                            right='0'
                            float='right'
                            src='https://bit.ly/dan-abramov' />
                    </WrapItem>
                </Wrap>

            </Flex>
    )
}

export default Chat;