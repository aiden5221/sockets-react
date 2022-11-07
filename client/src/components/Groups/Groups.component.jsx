import { Box, VStack, Avatar, AvatarBadge } from "@chakra-ui/react";

const Groups = () => {

    
    return(
            <VStack
                maxHeight='60vh'
                width='30vw'
                border='2px'
                borderColor='teal.400'
                borderRadius='1rem'
                
                spacing={4}
            >   
                <Box
                    float='left'
                    
                >
                <Avatar
                    
                >
                    <AvatarBadge boxSize='1.25em' bg='green.500'/>
                </Avatar>
                
                </Box>
                
            </VStack>
        
    )
}

export default Groups;