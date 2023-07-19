import React, {useState} from 'react'
import { styled} from 'styled-components'
import { SLabelBox, SCenterLayout, SInputLabelContainer, SInputBox, SButtonBox } from '../../styles/globalstyles'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword]= useState("");
  const [status, setStatus] = useState("아직 인증 안됨");
  // const Base_URL = "http://13.125.224.157";

  const handleLogin = async () => {
    const response = await axios.post(
      'http://13.125.224.157/api/auth/login',
      {
        "username":id,
        "password":password,
      },
      {withCredentials: true}
    );
    const token = response.headers.get('Authorization');
    localStorage.setItem("key", token);

    setId('');
    setPassword('');
    console.log("response:", response);
    if(response.ok){
      alert("로그인")
      setStatus("인증완료")
    } else{
      alert("로그인정보가 틀렸습니다")
    }
  };

  return (
    <SLogInLayout>
      <SInputLabelContainer $gapSize="10px" $paddingBottom="20">
        <SLabelBox $fontSort="big" $color="rgb(255,255,255)" $backgroundColor="rgb(255,182,193)">ID</SLabelBox>
        <SInputBox 
        $inputMainColor="255,20,147" 
        $inputHeight="60" 
        $inputWidth="350" 
        $inputFontSize="25"
        value={id}
        onChange={(e)=>setId(e.target.value)}/>
      </SInputLabelContainer>

      <SInputLabelContainer $gapSize="10px" $paddingBottom="20">
        <SLabelBox $fontSort="big" $color="rgb(255,255,255)" $backgroundColor="rgb(255,182,193)">PW</SLabelBox>
        <SInputBox 
        $inputMainColor="255,20,147" 
        $inputHeight="60" $inputWidth="350" 
        $inputFontSize="25"
        value = {password}
        onChange = {(e)=>setPassword(e.target.value)}/>
      </SInputLabelContainer>

      <SButtonBox $buttonSort="big" $color="rgb(255, 255, 255)" $backgroundColor="rgb(255,182,193)" onClick={handleLogin}>로그인</SButtonBox>
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
  color: rgb(255,20,147);
  font-weight: 600;

  cursor: pointer;
`