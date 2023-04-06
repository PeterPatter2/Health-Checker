import * as React from "react"
import { ChakraProvider,Box , Button,Text } from "@chakra-ui/react"
function ProfileBox(props){
    const {Name,thumbnailUrl,facebookUrl,igUrl} = props;
    return(
        <ChakraProvider>
        <Box>
        <Box w="100%" h="100%" alignItems="center" justifyContent="center" mb="5%">
            <Box bg="#63B3ED" textAlign="center" p="40px 90px" color="#fff" borderRadius="20px" >
                <Box width="25px" position="absolute" left="40px" top="40px">
                <img src="./images/menu.png" />
                </Box>
                <Box width="25px" position="absolute" right="40px" top="40px">
                <img src="./images/setting.png"/>
                </Box>
                <Box w="150px" border-radius="50%" bg="#fff" p="6px" mx="25%" mt="40px" >
                <img src={thumbnailUrl} />
                </Box>
                <Text>{Name}</Text>
                <p>Computer Engineering At KKU,Thailand.</p>
                <Box className="Social-media">
                    <Box display="flex" ml="35%" mt="10px" mb="10px">
                        <Box mx="10px" >
                        <a href={igUrl}  target="_blank"><img src="./images/instagram.png"  /></a>
                        </Box>
                        <a href={facebookUrl}  target="_blank" ><img src="./images/facebook.png"/></a>
                    </Box>
                </Box>
                <Button type="follow" bg="#fff" color="#6238FC" border="none" outline="none" boxShadow="0 5px 10px #49BAF5 " p="15px 60px" cursor="pointer" mb="-50px" fontWeight="600" fontSize="16px">follow</Button>
                <Box className="proflie-bottom" bg="#fff" color="#999" p="55px 0" mr="-90px" ml="-90px" mb="-40px" borderRadius="20px" mt="-10px">
                    <p>Learn More About My Profile</p>
                    <Box w="15px" mt="15px" cursor="pointer" mx="200px">
                    <img src="./images/arrow.png"/>
                    </Box>
                </Box>
            </Box>
        </Box>
        </Box>
        </ChakraProvider>
    );
}
export default ProfileBox