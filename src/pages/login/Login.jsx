import React from 'react'
import { styled} from 'styled-components'
import { SLabelBox, SCenterLayout, SInputLabelContainer, SInputBox } from '../../styles/globalstyles'

function Login() {
  return (
    <SLogInLayout>
      <SInputLabelContainer $gapSize="10px" $paddingBottom="20">
        <SLabelBox $fontSort="big" $color="rgb(255,255,255)" $backgroundColor="rgb(255,182,193)">ID</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="350" $inputFontSize="25"/>
      </SInputLabelContainer>

      <SInputLabelContainer $gapSize="10px">
        <SLabelBox $fontSort="big" $color="rgb(255,255,255)" $backgroundColor="rgb(255,182,193)">PW</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="350" $inputFontSize="25"/>
      </SInputLabelContainer>

    </SLogInLayout>
  )
}

export default Login

const SLogInLayout = styled(SCenterLayout)`
  padding-top: 100px;
`