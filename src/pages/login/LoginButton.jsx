import React from 'react'
import { Box } from '@chakra-ui/react';

function LoginButton({onClick, children}) {
  return (
    <Box 
    bg="#ED8936" 
    w="300px" h="70px" 
    color="white"
    borderRadius="2xl"
    fontSize="3xl"
    fontWeight="semibold"
    cursor="pointer"
    display={'flex'}
    alignItems={'center'}
    justifyContent={'center'}
    onClick={onClick}
    mt="20px"
    mb="20px"
     >
      {children}
    </Box>
  )
}

export default LoginButton