import React, { useState } from 'react'
import { SCenterLayout} from '../../styles/globalstyles'
import { styled } from 'styled-components'
import useInput from '../../hooks/useInput';
import { useMutation } from 'react-query';
import { checkId, signUp } from '../../api/joinapi';
import { useNavigate } from 'react-router-dom';
import JoinInputBox from './JoinInputBox';
import { Box } from '@chakra-ui/react';
// import bcrypt from 'bcrypt'

function Join() {

  const [username, onChangeUserNameHandler] = useInput();
  const [name, onChangeNameHandler] = useInput();
  const [email, onChangeEmailHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();
  const [checkPassword, onChangeCheckPassword] = useInput();
  const [checkIdAlert, setCheckIdAlert] = useState(false);

  const signUpMutation = useMutation((userData) => signUp(userData));
  const checkIdMutation = useMutation((username) => checkId(username));

  const navigate = useNavigate();

  const userData = {
        username,
        name,
        email,
        password
        // password: bcrypt.hash(password, 10)
  }
  
  const handleSignUp = async () => {
    if (!username || !name || !email || !password || !checkPassword) {
      alert("입력하지 않은 항목이 있습니다.");
    } else if (password !== checkPassword) {
      alert("비밀번호가 다릅니다.");
    } else if (!checkIdAlert) {
      alert("아이디 중복 확인을 진행하세요.");
    } else {
      try {
        await signUpMutation.mutateAsync(userData);
        alert("가입 성공!");
        console.log(userData)
        navigate("/login");
      } catch (error) {
        alert("가입 실패! 형식에 맞춰 가입해주세요");
        console.log(error);
      }
    }
  }
  
  const handleCheckId = async () => {
    setCheckIdAlert(false);
    try {
      // checkIdMutation.mutate()를 사용하여 비동기 함수를 실행합니다
      await checkIdMutation.mutateAsync(username);
      setCheckIdAlert(true);
      alert("사용 가능한 아이디입니다");
    } catch (error) {
      alert("아이디가 이미 있습니다");
    }
  };
  console.log(userData);

  return (
    <SCenterLayout>
      <SJoinInputLayout>
      <JoinInputBox
        value={username}
        onChange={onChangeUserNameHandler}
        placeholder={'숫자, 영소문자로만 구성, 총 3~10자'}
        check={true}
        onClick={handleCheckId}
        >아이디</JoinInputBox>

      <JoinInputBox
        value={name}
        onChange={onChangeNameHandler}
        placeholder={''}
        >이름</JoinInputBox>

      <JoinInputBox
        value={email}
        onChange={onChangeEmailHandler}
        placeholder={'이메일 형식에 맞춰 적어주세요 (@)'}
        type="email"
        >이메일</JoinInputBox>

      <JoinInputBox
        value={password}
        onChange={onChangePasswordHandler}
        placeholder={'영대•소문자, 숫자, 특수문자 1개이상 포함, 8자 ~ 15자'}
        type="password"
        >비밀번호</JoinInputBox>

      <JoinInputBox
        value={checkPassword}
        onChange={onChangeCheckPassword}
        placeholder={'위에 작성한 비밀번호를 입력하세요'}
        type="password"
        >비밀번호 확인</JoinInputBox>

      </SJoinInputLayout>

      <Box 
      bg="#ED8936" 
      w="300px" h="70px" 
      color="white"
      borderRadius="2xl"
      fontSize="3xl"
      fontWeight="semibold"
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      onClick={handleSignUp}
      mt="30px"
       >
        가입하기
      </Box>
    </SCenterLayout>
  );
}

export default Join

const SJoinInputLayout = styled.div`
  display: flex;
  flex-Direction: column;
  gap: 10px;

  margin-top: 20px;
`