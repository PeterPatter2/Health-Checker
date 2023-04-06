import "./Popup.css"
import { Box, ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";

function Popup2(props){

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
        if (totalScore>=0 && totalScore<=5) {
            picture = './images/green.png'
            epicture = './images/Egreen.png'
            message = 'คุณมีความเครียดในระดับน้อย'
            advice = 'ความเครียดระดับต่ำ คือความเครียดที่ไม่ส่งผลต่อการใช้ชีวิตมากนัก อาจจะแค่เกิดอาการเบื่อหน่าย ขาดแรงจูงใจ ส่งผลต่อต่อร่างกายคือเคลื่อนไหวเชื่องช้าลง'
        }
        if (totalScore>=6 && totalScore<=17) {
            picture = './images/greenlight.png'
            epicture = './images/Egreenlight.png'
            message = 'คุณมีความเครียดในระดับปกติ'
            advice = 'ความเครียดระดับปานกลาง เป็นระดับปกติที่เราควรจะมี ซึ่งเป็นระดับปานกลางที่ไม่ส่งผลอันตรายต่อสมดุลร่างกายอารมณ์ ไม่แสดงออกถึงความเครียดที่ชัดเจน สามารถกลับสู่ภาวะปกติได้เมื่อได้ทำกิจกรรมที่ชื่นชอบหากเกิดความเครียด'
        }
        if (totalScore>=18 && totalScore<=25) {
            picture = './images/yellow.png'
            epicture = './images/Eyellow.png'
            message = 'คุณมีความเครียดสูงกว่าระดับปกติเล็กน้อย'
            advice ='คุณอาจกำลังมีปัญหาบางอย่างที่ทำให้ไม่สบายใจอยู่ อาจทำให้มีอาการผิดปกติทางร่างกาย จิตใจ และพฤติกรรมเล็กน้อย คุณควรผ่อนคลายความเครียด เช่น - ออกกำลังกาย - นอนหลับพักผ่อน - ฟังเพลง ร้องเพลง หรือเล่นดนตรี - หรืออะไรก็ได้ ที่ทำแล้วรู้สึกดีขึ้น?'
        }
        if (totalScore>=26 && totalScore<=29) {
            picture = './images/orange.png'
            epicture = './images/Eorange.png'
            message = 'คุณมีความเครียดสูงกว่าระดับปกติปานกลาง'
            advice = 'ความเครียดระดับสูง เป็นความเครียดที่เกิดจากเหตุการณ์ รุนแรง ควรหาใครสักคนเพื่ออยู่เป็นเพื่อน คอยรับฟังปัญหา ระบายความรู้สึก เพราะหากว่าปรับตัวไม่ได้จะส่งผลต่อสุขภาพ อารมณ์ ความคิด พฤติกรรม เช่น ปวดหัว ปวดท้อง อารมณ์ฉุนเฉียวง่าย กินข้าวไม่อร่อย นอนไม่หลับ'
        }
        if (totalScore>=30 && totalScore<=60) {
            picture = './images/red.png'
            epicture = './images/Ered.png'
            message = 'คุณมีความเครียดสูงกว่าระดับปกติมาก'
            advice = 'ความเครียดระดับรุนแรง คือความผิดปกติทางอารมณ์เรื้องรังเป็นเวลานาน ส่งผลต่อการปรับตัวซึ่งไม่สามารถเป็นปกติได้ ส่งผลต่อสุขภาพที่ร้ายแรง เช่น มีอาการทางจิต บกพร่องต่อการดำเนินชีวิตประจำวัน อาจจะเป็น วัน อาทิตย์ เดือน ปี จึงควรรับการรักษาจากแพทย์หากมีความเครียดอยู่ในระดับรุนแรง'
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
export default Popup2