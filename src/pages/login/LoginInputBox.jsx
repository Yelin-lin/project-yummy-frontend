import React from 'react'
import { Box, Input } from '@chakra-ui/react';
import { styled } from 'styled-components'

function LoginInputBox({value, onChange, children, type}) {
  return (
    <SInputLabelContainer>
      <Box 
      bg="#ED8936" 
      w="100px" h="60px" 
       color="white"
       borderRadius="2xl"
       fontSize="2xl"
       fontWeight="semibold"
       display={'flex'}
       alignItems={'center'}
       justifyContent={'center'}
       >
        {children}
      </Box>
      <Input
        size='2lg'
        w="400px"
        fontSize="2xl"
        paddingLeft="10px"
        value={value}
        onChange={onChange}
        focusBorderColor="#ED8936" 
        type={type}
      />
      </SInputLabelContainer>
  )
}

export default LoginInputBox

const SInputLabelContainer = styled.div`
  display: flex;
  gap: 20px;

  margin: 20px;
`