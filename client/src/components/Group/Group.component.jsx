import { Box, Avatar, AvatarBadge, Center } from "@chakra-ui/react";
const Group = ({name, avatar}) => {

    const handleGroupChange = () => {
      
    }

    return (

        <Box
            position='relative'
            width='100%'
            minHeight='5vh'
            _hover={{
                opacity:'50%'
            }}
            onClick={handleGroupChange}
        >
        <Avatar
            right='0'
            left='2'
            display='inline-block'
            marginRight='8%'
            src={ avatar }
        >
            <AvatarBadge boxSize='1.25em' bg='green.500'/>
        </Avatar>
            <Center
                display='inline-block'
                fontSize='1xl'
                marginTop='5%'
            >
                { name }
            </Center>
        </Box>
    )
}

export default Group;