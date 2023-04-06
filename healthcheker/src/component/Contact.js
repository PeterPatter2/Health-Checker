import { ChakraProvider, Container ,Box, Input, Textarea, Button,Text} from "@chakra-ui/react";
import ScrollToTopOnMount from './ScrollToTopOnMount';

function Contact(){
    return(
        <ChakraProvider>
                <Box  w="100%" h="80vh" bgColor="#54BFDB"  top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center" >
                <ScrollToTopOnMount />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />
                   <Box bg="#fff" display="flex" flexDirection="column" p="2vw 4vw" w="90%" maxW="700px" borderRadius="10px">
                        <Box color="#555" fontWeight="800" mb="20px">
                        <Text fontFamily="'Itim', cursive" fontSize="5vh">ส่งข้อความหาเรา / MESSAGE US</Text>
                        </Box>
                    <form action="https://formsubmit.co/8f33be1439d0f1916003746792f9c46f" method="POST">
                        <Input type="text" name="name" placeholder="Your Name" required border="0" m="10px 0" p="20px" outline="none" bg="#f5f5f5" fontSize="16"></Input>
                        <Input type="email" name="email" placeholder="Email Id" required border="0" m="10px 0" p="20px" outline="none" bg="#f5f5f5" fontSize="16"></Input>
                        <Input type="text" name="phone" placeholder="Phone no." required border="0" m="10px 0" p="20px" outline="none" bg="#f5f5f5" fontSize="16"></Input>
                        <Textarea name="message" rows="4" placeholder="How can we help you?" border="0" m="10px 0" p="20px" outline="none" bg="#f5f5f5" fontSize="16"></Textarea>
                        <Button type="submit" p="15px" bg="#ff5361" color="#fff" fontSize="18px" border="0" outline="none" cursor="pointer" width="150px" m="20px auto o" borderRadius="20px">Send</Button>
                    </form>
                    </Box>
                </Box>
        </ChakraProvider>

    );
}
export default Contact