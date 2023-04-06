import * as React from "react";
import { ChakraProvider, Box, Text, Button } from "@chakra-ui/react";
import Radiogroup from "./Radiogroup";
import Ta2 from "./Ta2";
import { useState } from "react";
import Popup4 from "./Popup4";
import ScrollToTopOnMount from './ScrollToTopOnMount';

function Gad7() {
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
        <Ta2 />
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
              <Text fontFamily="'Itim', cursive">เกินกว่า 7 วัน</Text>
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
              color="black"
            >
              <Text w="40%" display="flex" fontFamily="'Itim', cursive" fontSize="3vh">1. รู้สึกตึงเครียด วิตกกังวล หรือ กระวนกระวาย</Text>
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
              color="black"
            >
              <Text w="40%" display="flex" fontFamily="'Itim', cursive" fontSize="3vh">2. ไม่สามารถหยุดหรือควบคุมความกังวลได้</Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(1, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                3. กังวลมากเกินไปในเรื่องต่างๆ
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(2, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                4.ทำตัวให้ผ่อนคลายได้ยาก{" "}
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(3, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                5. รู้สึกกระสับกระส่ายจนไม่สามารถนั่งนิ่งๆ ได้
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(4, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                6. กลายเป็นคนขี้รำคาญ หรือ หงุดหงิดง่าย
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(5, score)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="inline-flex" w="100%" pt="3%" color="black">
              <Text w="40%" fontSize="3vh" display="flex" fontFamily="'Itim', cursive">
                7. รู้สึกกลัวเหมือนว่าจะมีอะไรร้ายๆ เกิดขึ้น
              </Text>
              <Box ml="15%">
                <Radiogroup onChange={(score) => handleScoreChange(6, score)} />
              </Box>
            </Box>
          </Box>
          <Box w="100%" textAlign="right">
            <Button
              onClick={handleSubmit}
              colorScheme="whatsapp"
              mt="3%"
              size="lg"
              fontFamily="'Itim', cursive"
            >
              ประเมิน
            </Button>
          </Box>
        </Box>
        {isPopupOpen && (
          <Popup4 totalScore={totalScore} onClose={handlePopupClose} />
        )}
      </Box>
    </ChakraProvider>
  );
}
export default Gad7;
