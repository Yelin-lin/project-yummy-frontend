import React from 'react'
import { styled} from 'styled-components'
import { SLabelBox, SCenterLayout, SInputLabelContainer, SInputBox, SButtonBox } from '../../styles/globalstyles'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <SLogInLayout>
      <SInputLabelContainer $gapSize="10px" $paddingBottom="20">
        <SLabelBox $fontSort="big" $color="rgb(255,255,255)" $backgroundColor="rgb(255,182,193)">ID</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="350" $inputFontSize="25"/>
      </SInputLabelContainer>

      <SInputLabelContainer $gapSize="10px" $paddingBottom="20">
        <SLabelBox $fontSort="big" $color="rgb(255,255,255)" $backgroundColor="rgb(255,182,193)">PW</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="350" $inputFontSize="25"/>
      </SInputLabelContainer>

      <SButtonBox $buttonSort="big" $color="rgb(255, 255, 255)" $backgroundColor="rgb(255,182,193)">로그인</SButtonBox>
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