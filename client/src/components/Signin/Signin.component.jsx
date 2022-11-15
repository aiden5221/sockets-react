import { Button, Center, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
const Signin = () => {
    const [username, setUsername] = useState('');

    const handleUsernameInput = (e) => setUsername(e.target.value) ;
    const isError = username === ''

    return (
        <Center
            display='grid'
            height='30vh'
            margin='auto'
            marginTop='10vh'
            padding='2%'
            width='40vw'
            border='2px'
            borderRadius='15px'
        >
            <Text
                align='center'
                display='inline-block'
            >Chat App</Text>
            <FormControl isInvalid={isError}>
                <FormLabel>Username</FormLabel>
                <Input
                    type='text'
                    value={username}
                    onChange={handleUsernameInput}  
                />
                {
                    isError ? (
                        <FormHelperText>
                            Enter a username!
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>
                            Username is required to login!
                        </FormErrorMessage>
                    )
                }
                <Button
                    display='flex'
                    

                    position='absolute'
                >Log In</Button>
            </FormControl>
        </Center>
    );
}

export default Signin;