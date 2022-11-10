import { Spacer, StackDivider, VStack } from "@chakra-ui/react";
import Group from "../Group/Group.component";
import './Groups.styles.css';
const Groups = () => {

    
    return(    
            <VStack
                maxHeight='60vh'
                minHeight='60vh'
                width='25vw'
                border='2px'
                borderColor='teal.400'
                borderRadius='0.5rem'
                spacing={4}
                divider={ <StackDivider borderColor='gray.200' />}
                overflowY='scroll'
            >   
                
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
                <Group name='Danny Devito' avatar='https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' />
            </VStack>
    )
}

export default Groups;