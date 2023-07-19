import React from 'react';
import { Box, Input } from '@chakra-ui/react';
import { styled } from 'styled-components'

function InputBox({ value, onChange, children, placeholder, check, onClick, type }) {
  return (
    <SInputLabelContainer>
      <Box 
      bg="#ED8936" 
      w="150px" h="50px" 
       color="white"
       borderRadius="2xl"
       fontSize="xl"
       fontWeight="semibold"
       display={'flex'}
       alignItems={'center'}
       justifyContent={'center'}
       >
        {children}
      </Box>
      <Input
        placeholder={placeholder}
        size='lg'
        w="500px"
        value={value}
        onChange={onChange}
        focusBorderColor="#ED8936" 
        type={type}
      />
      {check ? (
        <Box 
          bg="white"
          border="3px solid#ED8936" 
          color="#ED8936" 
          w="150px" 
          h="50px" 
          borderRadius="2xl"
          fontSize="l"
          fontWeight="semibold"
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          onClick={onClick}
          cursor="pointer"
          _hover={{background:"#ED8936", color:"white"}}
        >
          아이디중복 확인
        </Box>
      ) : null}
    </SInputLabelContainer>
  );
}

export default InputBox;

const SInputLabelContainer = styled.div`
  display: flex;
  gap: 20px;

  margin-top: 20px;
`

