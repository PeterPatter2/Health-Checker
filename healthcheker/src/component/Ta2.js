import * as React from "react"
import { ChakraProvider, Text,Box } from "@chakra-ui/react"
function Ta2(){
    return (
        <ChakraProvider>
        <Box  bg="#EDF2F7" bgGradient='linear(to-r,#1c92d2,#f2fcfe)' display="flex" flexDirection="column" p="2vw 4vw" w="90%" maxW="1250px" borderRadius="10px" mt="3%" mb="0%" justifyContent="center" >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />
            <Box display="flex">
            <Box w="100%" mt="3%">
            <Text fontSize="7xl" display="flex" fontFamily="'Itim', cursive">แบบทดสอบ</Text>
            <Text fontSize="6xl" display="flex" fontFamily="'Itim', cursive">ความวิตกกังวล GAD-7</Text>
            </Box>
            <Box w="80%"  mr="0%" ml="0%" mx="-40%">
                <img src="./images/Anxiety-Disorder-1.png"/>
            </Box>
            </Box>
            <Box>
            <Text mt="-2%" fontSize="2xl" fontFamily="'Itim', cursive">โปรดใส่คะแนนให้ตรงกับคำตอบของท่าน</Text>
            <Text fontSize="2xl" fontFamily="'Itim', cursive">(เกณฑ์ให้คะแนน : ไม่เลย = 0, มีบางวันหรือไม่บ่อย = 1, มีค่อนข้างบ่อย = 2, มีเกือบทุกวัน = 3)</Text>
            </Box>
        </Box>
    </ChakraProvider>
    );
}
export default Ta2