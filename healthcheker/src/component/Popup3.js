import "./Popup.css"
import { Box, ChakraProvider } from "@chakra-ui/react";
import { useEffect } from 'react';

function Popup3(props){

  useEffect(() => {
    document.documentElement.style.overflowY = 'hidden';

    return () => {
      document.documentElement.style.overflowY = 'auto';
    };
  },[]);

    const{onClose,totalScore}=props;
    let message = '';
    let picture = '';
    let epicture = '';
    let advice = '';
    if (props) {
        if (totalScore>=0 && totalScore<=4) {
            picture = './images/green.png'
            epicture = './images/Egreen.png'
            message = 'คุณไม่มีอาการซึมเศร้าหรือมีก็เพียงเล็กน้อย'
            advice = 'ไม่จำเป็นต้องรักษา'
        }
        if (totalScore>=5 && totalScore<=8) {
            picture = './images/greenlight.png'
            epicture = './images/Egreenlight.png'
            message = 'คุณมีอาการซึมเศร้าระดับเล็กน้อย'
            advice = ' ควรพักผ่อนให้เพียงพอ ออกกำลังกายสม่ำเสมอ ทำกิจกรรมที่ทำให้ผ่อนคลาย พบปะเพื่อนฝูง ควรทำแบบประเมินอีกครั้งใน 1 สัปดาห์'
        }
        if (totalScore>=9 && totalScore<=14) {
            picture = './images/yellow.png'
            epicture = './images/Eyellow.png'
            message = 'คุณมีอาการซึมเศร้าระดับปานกลาง'
            advice = 'ควรพักผ่อนให้เพียงพอ ออกกำลังกายสม่ำเสมอ ทำกิจกรรมที่ทำให้ผ่อนคลาย พบปะเพื่อนฝูง ควรขอคำปรึกษาจากผู้ที่ไว้วางใจ ไม่จมอยู่กับปัญหา หากคุณมีอาการที่มีผลกระทบต่อการทำงานหรือเข้าสังคม ควรพบแพทย์เพื่อรับการช่วยเหลือ'
        }
        if (totalScore>=15 && totalScore<=19) {
            picture = './images/orange.png'
            epicture = './images/Eorange.png'
            message = 'คุณมีอาการซึมเศร้าระดับรุนแรงค่อนข้างมาก'
            advice = 'ควรพบแพทย์เพื่อประเมินอาการและให้การรักษา ระหว่างนี้ควรพักผ่อนให้เพียงพอ ออกกำลังกายเบาๆ ทำกิจกรรมที่ทำให้ผ่อนคลาย ไม่เก็บตัว และควรขอคำปรึกษาจากผู้ใกล้ชิด'
        }
        if (totalScore>=20 && totalScore<=27) {
            picture = './images/red.png'
            epicture = './images/Ered.png'
            message = 'คุณมีอาการซึมเศร้าระดับรุนแรงมาก'
            advice = 'ต้องพบแพทย์เพื่อประเมินอาการและให้การรักษาโดยเร็ว ไม่ควรปล่อยทิ้งไว้'
        }
    }


    return (
        <ChakraProvider>
          <Box
            className="popup"
            onClick={onClose}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="fixed"
            top="0"
            left="0"
            height="100%"
            width="100%"
            backgroundColor="rgba(0, 0, 0, 0.5)"
          >
            <Box
              backgroundColor="white"
              borderRadius="md"
              boxShadow="lg"
              maxWidth="80%"
              maxHeight="80%"
              overflow="auto"
            >
              <Box
                className="inpopup-content"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding="2rem"
              >
                <Box className="image-container" w="100%" mt="-10%">
                  <img src={picture} alt="score image" width="100%" />
                </Box>
                <Box className="score-container" margin="1rem" textAlign="center" mt="-5%">
                  <Box fontSize="4xl" fontWeight="bold">
                    คะแนนรวม {totalScore}
                  </Box>
                  <Box fontSize="2xl" display="flex" alignItems="center">
                    <Box w="50px" ml="1rem">
                      <img src={epicture} alt="emoji" width="100%" />
                    </Box>
                    <Box marginLeft="1rem">{message}</Box>
                  </Box>
                </Box>
                <Box className="advice-container" fontSize="xl" margin="1rem">
                  <Box fontWeight="bold" marginBottom="0.5rem">
                    ข้อแนะนำ
                  </Box>
                  {advice}
                  <br/>
                  <a>ขอบคุณข้อมูลจาก "www.rama.mahidol.ac.th"</a>
                </Box>
              </Box>
            </Box>
          </Box>
        </ChakraProvider>
      );
}
export default Popup3