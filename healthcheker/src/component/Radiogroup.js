import { ChakraProvider, Radio, Stack, RadioGroup, Box } from '@chakra-ui/react';
import { useState } from 'react';

function Radiogroup(props) {
  const [formData, setFormData] = useState({
    radio: ''
  });

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      radio: value
    });
  };

  const calculateTotalScore = () => {
    let totalScore = 0;
    if (formData.radio !== '') {
      totalScore += parseInt(formData.radio);
    }
    return totalScore;
  };

  const totalScore = calculateTotalScore();

  return (
    <ChakraProvider>
      <Box>
        <RadioGroup defaultValue='4' onChange={(value) => handleRadioChange(value)}>
          <Stack spacing={109} direction='row'>
            <Radio size='lg' colorScheme='green' type="radio" name="score" value="0" onChange={props.onChange}></Radio>
            <Radio size='lg' colorScheme='yellow' type="radio" name="score" value="1" onChange={props.onChange}></Radio>
            <Radio size='lg' colorScheme='orange' type="radio" name="score" value="2" onChange={props.onChange}></Radio>
            <Radio size='lg' colorScheme='red' type="radio" name="score" value="3" onChange={props.onChange}></Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </ChakraProvider>
  );
}

export default Radiogroup;