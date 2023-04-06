import * as React from "react"
import { ChakraProvider,Box } from "@chakra-ui/react"
import ProfileBox from "./ProfileBox";
import About2 from "./About2";
import ScrollToTopOnMount from './ScrollToTopOnMount';

function Aboutpage(){
    return(
        <ChakraProvider>
            <Box bgColor="#54BFDB"  top={0} right={0}  left={0}  >
            <ScrollToTopOnMount />
            <About2/>
                <Box mt="5%">
                    <Box display="flex" m="auto" p="5%px" justifyContent="center" alignItems="center"  >
                        <Box pl="5%">
                        <ProfileBox Name="Phattharaphon Saenboonsiri" thumbnailUrl="./images/Patter.jpg" facebookUrl="https://www.facebook.com/profile.php?id=100014629233911" igUrl="https://www.instagram.com/p_patterr14/"/>
                        </Box>
                        <Box pl="5%">
                        <ProfileBox Name="Thanakorn Sukapoonpun" thumbnailUrl="./images/Aom.jpg" facebookUrl="https://www.facebook.com/profile.php?id=100008232881955" igUrl="https://www.instagram.com/_patronizer_/" />
                        </Box>
                        <Box pl="5%" pr="5%">
                        <ProfileBox Name="Sattrawoot Parnemeng" thumbnailUrl="./images/diamond.png" facebookUrl="https://www.facebook.com/profile.php?id=100012359224811" igUrl="https://www.instagram.com/sattrawoot_diamond_/"/>
                        </Box>
                    </Box>
                </Box>
            </Box>
       </ChakraProvider>
    );
}
export default Aboutpage;
