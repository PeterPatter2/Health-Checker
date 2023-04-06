import * as React from "react";
import { ChakraProvider, Box, Text, Button } from "@chakra-ui/react";
import Radiogroup from "./Radiogroup";
import Ta from "./Ta";
import { useState } from "react";
import Popup3 from "./Popup3";
import ScrollToTopOnMount from './ScrollToTopOnMount';

function Phq9() {
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
        <Ta />
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
        >
          <Box display="inline-flex" ml="50%" color="black">
            <Box pl="5%" fontSize="2xl" fontFamily="'Itim', cursive">
              <Text fontFamily="'Itim', cursive">ไม่เลย</Text>
            </Box>
            <Box pl="10%" fontSize="2xl" fontFamily="'Itim', cursive">
              <Text fontFamily="'Itim', cursive">บางวัน</Text>
            </Box>
            <Box pl="8%" fontSize="2xl" fontFamily="'Itim', cursive">
              <Text fontFamily="'Itim', cursive">ค่อนข้างบ่อย</Text>
            </Box>
            <Box pl="5%" fontSize="2xl" fontFamily="'Itim', cursive">
              <Text fontFamily="'Itim', cursive">เกือบทุกวัน</Text>
            </Box>
          </Box>
          <Box>
            <Box
              display="inline-flex"
              w="100%"
              pt="3%"
              fontSize="xl"
              
            >
              <Text w="40%" color="black" display="flex" fontFamily="'Itim', cursive" fontSize="3vh">1. เบื่อ ทำอะไร ๆ ก็ไม่เพลิดเพลิน</Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(0, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              display="inline-flex"
              w="100%"
              pt="3%"
              fontSize="xl"
              
            >
              <Text w="40%" color="black" display="flex" fontFamily="'Itim', cursive" fontSize="3vh">2. ไม่สบายใจ ซึมเศร้า หรือท้อแท้</Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(1, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" >
              <Text w="40%" fontSize="3vh" color="black" display="flex" fontFamily="'Itim', cursive">
                3. หลับยาก หรือหลับ ๆ ตื่น ๆ หรือหลับมากไป
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(2, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" >
              <Text w="40%" fontSize="3vh" color="black" display="flex" fontFamily="'Itim', cursive">
                4.เหนื่อยง่าย หรือไม่ค่อยมีแรง
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(3, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="white">
              <Text w="40%" fontSize="3vh" color="black" display="flex" fontFamily="'Itim', cursive">
                5. เบื่ออาหาร หรือกินมากเกินไป
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(4, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="white">
              <Text w="40%" fontSize="3vh" color="black" display="flex" textAlign="left" fontFamily="'Itim', cursive">
                6. รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลวหรือเป็นคนทำให้ตัวเอง หรือครอบครัวผิดหวัง
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(5, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="white" >
              <Text w="40%" fontSize="3vh" color="black"  textAlign="left" fontFamily="'Itim', cursive">
                7. สมาธิไม่ดีเวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุหรือทำงานที่ต้องใช้ความตั้งใจ
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(6, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="white">
              <Text w="40%" fontSize="3vh" color="black" textAlign="left" fontFamily="'Itim', cursive">
                8. พูดหรือทำอะไรช้าจนคนอื่นมองเห็น หรือกระสับกระส่ายจนท่านอยู่ไม่นิ่งเหมือนเคย
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(7, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" >
              <Text w="40%" fontSize="3vh" color="black" display="flex" textAlign="left" fontFamily="'Itim', cursive">
                9. คิดทำร้ายตนเอง หรือคิดว่าถ้าตาย ๆ ไปเสียคงจะดี
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(8, score)} />
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
            <Popup3
              totalScore={totalScore}
              onClose={handlePopupClose}
            />
          )}
      </Box>
    </ChakraProvider>
  );
}
export default Phq9;
