import React from 'react'
import { styled} from 'styled-components'
import { SLabelBox, SCenterLayout, SInputLabelContainer, SInputBox } from '../../styles/globalstyles'

function Login() {
  return (
    <SLogInLayout>
      <SInputLabelContainer $gapSize="10px">
        <SLogInInputLabelBox $fontSort="big">ID</SLogInInputLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="350" $inputFontSize="25"/>
      </SInputLabelContainer>

      <SInputLabelContainer $gapSize="10px">
        <SLogInInputLabelBox $fontSort="big">PW</SLogInInputLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="350" $inputFontSize="25"/>
      </SInputLabelContainer>

    </SLogInLayout>
  )
}

export default Login

const SLogInLayout = styled(SCenterLayout)`
  padding-top: 100px;
`
const SLogInInputLabelBox = styled(SLabelBox)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: rgb(255,255,255);

  background-color: rgb(255,182,193);
  width: 80px;
  border-radius: 10px;
  padding: 10px;
`;