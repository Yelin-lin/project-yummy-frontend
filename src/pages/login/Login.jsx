import React from 'react'
import { styled} from 'styled-components'
import { SLabelBox, SCenterLayout, SInputLabelContainer, SInputBox, SButtonBox } from '../../styles/globalstyles'
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../../api/loginapi';
import useInput from '../../hooks/useInput';
import LoginInputBox from './LoginInputBox';
import LoginButton from './LoginButton';

function Login() {
  const navigate = useNavigate();
  const [id, onChangeIdHandler] = useInput();
  const [password, onChangePasswordHandler]= useInput();

  const handleLoginClick = async() => {
    try{
      const data = await handleLogin(id, password);
        const token = data.headers.get('Authorization');
        localStorage.setItem("token", token);
        navigate("/");
        console.log(data);
    } catch(error){
      alert("아이디와 비밀번호를 확인하세요!")
      console.log(error)
    }
  };

  return (
    <SLogInLayout>
      <LoginInputBox value={id} onChange={onChangeIdHandler}>ID</LoginInputBox>
      <LoginInputBox value={password} onChange={onChangePasswordHandler}>PW</LoginInputBox>

      <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
      <div>→ 회원이 아니신가요?  
        <SLogInSpanBox onClick={()=>{
          navigate("/join")
        }}> 회원가입</SLogInSpanBox>
      </div>


    </SLogInLayout>
  )
}

export default Login

const SLogInLayout = styled(SCenterLayout)`
  padding-top: 100px;
`

const SLogInSpanBox = styled.span`
  color: #ED8936;
  font-weight: 600;

  cursor: pointer;
`