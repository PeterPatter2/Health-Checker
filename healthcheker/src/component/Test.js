import { Container } from "@chakra-ui/react";
import * as React from "react"
import { ChakraProvider,Box,Text,Button,RadioGroup,Stack,Radio } from "@chakra-ui/react"

function Test(){

    return(
        <ChakraProvider>
        <Container minH="100vh" maxW="100vh">
            <Box  bgGradient='linear(to-r,#acb6e5,#86fde8)' position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="flex-start" justifyContent="center" w="100%" maxH="full">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />
                <Box bg="#EDF2F7" bgGradient='linear(to-r,#2193b0,#6dd5ed)' display="flex" flexDirection="column" p="2vw 4vw" w="90%" maxW="1250px" borderRadius="10px" mt="5%" mb="5%" >
                        <Box color="#555" fontWeight="800" mb="20px">
                        </Box>
                        <Box display="inline-flex" ml="50%" color="white">
                            <Box pl="5%" fontSize="2xl" fontFamily="'Itim', cursive"><h3>ไม่เลย</h3></Box>
                            <Box pl="10%" fontSize="2xl" fontFamily="'Itim', cursive"><h3>บางวัน</h3></Box>
                            <Box pl="8%" fontSize="2xl" fontFamily="'Itim', cursive"><h3>ค่อนข้างบ่อย</h3></Box>
                            <Box pl="5%" fontSize="2xl" fontFamily="'Itim', cursive"><h3>เกือบทุกวัน</h3></Box>
                        </Box>
                        <Box>
                            <Box display="inline-flex" w="100%" pt="3%" fontSize="xl" color="white">
                            <Text w="40%" fontFamily="'Itim', cursive">1. เบื่อ ทำอะไร ๆ ก็ไม่เพลิดเพลิน</Text> 
                            <Box ml="15%"><RadioGroup defaultValue='4'>
                <Stack spacing={109} direction='row'>
                    <Radio size='lg' colorScheme='green' value='0'></Radio>
                    <Radio size='lg' colorScheme='yellow' value='1'></Radio>
                    <Radio size='lg' colorScheme='orange' value='2'></Radio>
                    <Radio size='lg' colorScheme='red' value='3'></Radio>
                </Stack>
            </RadioGroup></Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box display="inline-flex" w="100%" pt="3%" fontSize="xl"color="white" >
                            <Text w="40%" fontFamily="'Itim', cursive">2. ไม่สบายใจ ซึมเศร้า หรือท้อแท้</Text> 
                            <Box ml="15%"><RadioGroup defaultValue='4'>
                <Stack spacing={109} direction='row'>
                    <Radio size='lg' colorScheme='green' value='0'></Radio>
                    <Radio size='lg' colorScheme='yellow' value='1'></Radio>
                    <Radio size='lg' colorScheme='orange' value='2'></Radio>
                    <Radio size='lg' colorScheme='red' value='3'></Radio>
                </Stack>
            </RadioGroup></Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box display="inline-flex" w="100%" pt="3%" color="white" >
                            <Text w="40%" fontSize="xl" fontFamily="'Itim', cursive">3. หลับยาก หรือหลับ ๆ ตื่น ๆ หรือหลับมากไป</Text> 
                            <Box ml="15%"><RadioGroup defaultValue='4'>
                <Stack spacing={109} direction='row'>
                    <Radio size='lg' colorScheme='green' value='0'></Radio>
                    <Radio size='lg' colorScheme='yellow' value='1'></Radio>
                    <Radio size='lg' colorScheme='orange' value='2'></Radio>
                    <Radio size='lg' colorScheme='red' value='3'></Radio>
                </Stack>
            </RadioGroup></Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box display="inline-flex" w="100%" pt="3%" color="white" >
                            <Text w="40%" fontSize="xl" fontFamily="'Itim', cursive">4.เหนื่อยง่าย หรือไม่ค่อยมีแรง</Text> 
                            <Box ml="15%"><RadioGroup defaultValue='4'>
                <Stack spacing={109} direction='row'>
                    <Radio size='lg' colorScheme='green' value='0'></Radio>
                    <Radio size='lg' colorScheme='yellow' value='1'></Radio>
                    <Radio size='lg' colorScheme='orange' value='2'></Radio>
                    <Radio size='lg' colorScheme='red' value='3'></Radio>
                </Stack>
            </RadioGroup></Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box display="inline-flex" w="100%" pt="3%" color="white" >
                            <Text w="40%" fontSize="xl" fontFamily="'Itim', cursive">5. เบื่ออาหาร หรือกินมากเกินไป</Text> 
                            <Box ml="15%"><RadioGroup defaultValue='4'>
                <Stack spacing={109} direction='row'>
                    <Radio size='lg' colorScheme='green' value='0'></Radio>
                    <Radio size='lg' colorScheme='yellow' value='1'></Radio>
                    <Radio size='lg' colorScheme='orange' value='2'></Radio>
                    <Radio size='lg' colorScheme='red' value='3'></Radio>
                </Stack>
            </RadioGroup></Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box display="inline-flex" w="100%" pt="3%" color="white" >
                            <Text w="40%" fontSize="xl" fontFamily="'Itim', cursive">6. รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลว หรือเป็นคนทำให้ตัวเอง หรือครอบครัวผิดหวัง</Text> 
                            <Box ml="15%"><RadioGroup defaultValue='4'>
                <Stack spacing={109} direction='row'>
                    <Radio size='lg' colorScheme='green' value='0'></Radio>
                    <Radio size='lg' colorScheme='yellow' value='1'></Radio>
                    <Radio size='lg' colorScheme='orange' value='2'></Radio>
                    <Radio size='lg' colorScheme='red' value='3'></Radio>
                </Stack>
            </RadioGroup></Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box display="inline-flex" w="100%" pt="3%" color="white" >
                            <Text w="40%" fontSize="xl" fontFamily="'Itim', cursive">7. สมาธิไม่ดีเวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานท่ีต้องใช้ความตั้งใจ</Text> 
                            <Box ml="15%"><RadioGroup defaultValue='4'>
                <Stack spacing={109} direction='row'>
                    <Radio size='lg' colorScheme='green' value='0'></Radio>
                    <Radio size='lg' colorScheme='yellow' value='1'></Radio>
                    <Radio size='lg' colorScheme='orange' value='2'></Radio>
                    <Radio size='lg' colorScheme='red' value='3'></Radio>
                </Stack>
            </RadioGroup></Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box display="inline-flex" w="100%" pt="3%" color="white" >
                            <Text w="40%" fontSize="xl" fontFamily="'Itim', cursive">8. พูดหรือทำอะไรช้าจนคนอื่นมองเห็น หรือกระสับกระส่ายจนท่านอยู่ไม่นิ่งเหมือนเคย</Text> 
                            <Box ml="15%"><RadioGroup defaultValue='4'>
                <Stack spacing={109} direction='row'>
                    <Radio size='lg' colorScheme='green' value='0'></Radio>
                    <Radio size='lg' colorScheme='yellow' value='1'></Radio>
                    <Radio size='lg' colorScheme='orange' value='2'></Radio>
                    <Radio size='lg' colorScheme='red' value='3'></Radio>
                </Stack>
            </RadioGroup></Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box display="inline-flex" w="100%" pt="3%" color="white">
                            <Text w="40%" fontSize="xl" fontFamily="'Itim', cursive">9. คิดทำร้ายตนเอง หรือคิดว่าถ้าตาย ๆ ไปเสียคงจะดี</Text> 
                            <Box ml="15%"><RadioGroup defaultValue='4'>
                <Stack spacing={109} direction='row'>
                    <Radio size='lg' colorScheme='green' value='0'></Radio>
                    <Radio size='lg' colorScheme='yellow' value='1'></Radio>
                    <Radio size='lg' colorScheme='orange' value='2'></Radio>
                    <Radio size='lg' colorScheme='red' value='3'></Radio>
                </Stack>
            </RadioGroup></Box>
                            </Box>
                        </Box>
                        <Box >
                            <Button colorScheme="whatsapp" mt="3%" ml="86%" size='lg'>Check now</Button>
                        </Box>
                </Box>
            </Box>
        </Container>
        </ChakraProvider>
    );
}
export default Test