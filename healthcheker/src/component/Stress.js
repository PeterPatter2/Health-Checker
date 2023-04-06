import * as React from "react";
import { ChakraProvider, Box, Text, Button } from "@chakra-ui/react";
import Radiogroup from "./Radiogroup";
import Ta3 from "./Ta3";
import Popup2 from "./Popup2";
import { useState } from "react";
import ScrollToTopOnMount from './ScrollToTopOnMount';

function Stress() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePopupClose = () => {
      setIsPopupOpen(false);
    };

  const [scores, setScores] = React.useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [totalScore, setTotalScore] = React.useState(0);

  React.useEffect(() => {
    const sum = scores.reduce((acc, curr) => acc + curr);
    setTotalScore(sum);
  }, [scores]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const totalScore = scores.reduce((acc, curr) => acc + curr);
    setTotalScore(totalScore);
    setIsPopupOpen(true);
  };

  const handleScoreChange = (index, score) => {
    const newScores = [...scores];
    newScores[index] = parseInt(score.target.value);
    setScores(newScores);
  };

  return (
    <ChakraProvider>
      <Box
        bgGradient="linear(to-r,#acb6e5,#86fde8)"
        position=""
        top="0"
        right="0"
        bottom="0"
        left="0"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <ScrollToTopOnMount />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />
        <Ta3 />
        <Box
          bg="#EDF2F7"
          bgGradient="linear(to-r,#56CCF2,#2F80ED)"
          display="flex"
          flexDirection="column"
          p="2vw 4vw"
          w="90%"
          maxW="1250px"
          borderRadius="10px"
          mt="3%"
          mb="5%"
          justifyItems="center"
          fontFamily="'Itim', cursive"
          textAlign="left"
        >
          <Box display="inline-flex" ml="50%" color="black">
            <Box pl="5%" fontSize="2xl" fontFamily="'Itim', cursive">
              <Text fontFamily="'Itim', cursive">ไม่เลย</Text>
            </Box>
            <Box pl="8%" fontSize="2xl">
              <Text fontFamily="'Itim', cursive">เป็นครั้งคราว</Text>
            </Box>
            <Box pl="4%" fontSize="2xl">
              <Text fontFamily="'Itim', cursive">เป็นบ่อย</Text>
            </Box>
            <Box pl="5%" fontSize="2xl">
              <Text fontFamily="'Itim', cursive">เป็นประจำ</Text>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                1. นอนไม่หลับเพราะคิดมากหรือกังวลใจ
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(0, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                2. รู้สึกหงุดหงิด รำคาญใจ
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(1, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                3. ทำอะไรไม่ได้เลยเพราะประสาทตึงเครียด
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(2, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive"> 
                4. มีความวุ่นวายใจ{" "}
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(3, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                5. ไม่อยากพบปะผู้คน
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(4, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                6. ปวดหัวข้างเดียว หรือปวดบริเวณขมับทั้ง 2 ข้าง
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(5, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                7. รู้สึกไม่มีความสุขและเศร้าหมอง
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(6, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                8. รู้สึกหมดหวังในชีวิต
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(7, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                9. รู้สึกชีวิตตนเองไม่มีคุณค่า
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(8, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                10. กระวนกระวายอยู่ตลอดเวลา
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(9, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                11. รู้สึกว่าตนเองไม่มีสมาธิ
              </Text>
              <Box ml="15%">
                <Radiogroup
                  onChange={(score) => handleScoreChange(10, score)}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                12. รู้สึกเพลียจนไม่มีแรงจะทำอะไร
              </Text>
              <Box ml="15%">
                <Radiogroup
                  onChange={(score) => handleScoreChange(11, score)}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                13. รู้สึกเหนื่อยหน่ายไม่อยากทำอะไร
              </Text>
              <Box ml="15%">
                <Radiogroup
                  onChange={(score) => handleScoreChange(12, score)}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                14. มีอาการหัวใจเต้นแรง
              </Text>
              <Box ml="15%">
                <Radiogroup
                  onChange={(score) => handleScoreChange(13, score)}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                15. เสียงสั่น ปากสั่น หรือมือสั่นเวลาไม่พอใจ
              </Text>
              <Box ml="15%">
                <Radiogroup
                  onChange={(score) => handleScoreChange(14, score)}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                16. รู้สึกกลัวผิดพลาดในการทำสิ่งต่าง ๆ
              </Text>
              <Box ml="15%">
                <Radiogroup
                  onChange={(score) => handleScoreChange(15, score)}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                17. ปวดหรือเกร็งกล้ามเนื้อบริเวณท้ายทอย
              </Text>
              <Box ml="15%">
                <Radiogroup
                  onChange={(score) => handleScoreChange(16, score)}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                18. ตื่นเต้นง่ายกับเหตุการณ์ที่ไม่คุ้นเคย
              </Text>
              <Box ml="15%">
                <Radiogroup
                  onChange={(score) => handleScoreChange(17, score)}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                19. มึนงงหรือเวียนศีรษะ
              </Text>
              <Box ml="15%">
                <Radiogroup
                  onChange={(score) => handleScoreChange(18, score)}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                20. ความสุขทางเพศลดลง
              </Text>
              <Box ml="15%">
                <Radiogroup
                  onChange={(score) => handleScoreChange(19, score)}
                />
              </Box>
            </Box>
          </Box>
          <Box w="100%" textAlign="right">
            <Button onClick={handleSubmit} colorScheme="whatsapp" mt="3%" size="lg" fontFamily="'Itim', cursive">
              ประเมิน
            </Button>
          </Box>
        </Box>
        {isPopupOpen && (
            <Popup2
              totalScore={totalScore}
              onClose={handlePopupClose}
            />
          )}
      </Box>
    </ChakraProvider>
  );
}
export default Stress;
