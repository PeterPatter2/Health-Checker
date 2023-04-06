import * as React from "react"
import { ChakraProvider, Text, Box } from "@chakra-ui/react"

function About2(){
    return(
        <ChakraProvider>
            <Box display="flex" mx="60%" mr="1%">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />
                <Text pt="20px" backgroundColor="white" bgClip='text' fontSize='6xl' fontWeight='extrabold' fontFamily="'Itim', sans-serif">
                    Team Developer
                </Text>
            </Box>
            <Box display="flex" mx="60%" p="11px" mr="5%" bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)' />
            <Text fontSize="30px" pt="10px" color="white" display="flex" mx="60%" mr="10%" textAlign="left" fontFamily="'Itim', cursive">
                นักศึกษาคณะวิศวกรรมศาสตร์<br/>สาขาวิศวกรรมคอมพิวเตอร์<br/>มหาวิทยาลัยขอนแก่น
            </Text>
        </ChakraProvider>
    );
}

export default About2;