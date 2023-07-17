import React from 'react'
import { SCenterLayout, SInputBox, SInputLabelContainer, SLabelBox } from '../../styles/globalstyles'
import { styled } from 'styled-components'

function Join() {
  return (
    <SJoinCenterLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SInputLabelContainer $gapSize="10px" >
        <SLabelBox $fontSort="medium" $backgroundColor="rgb(255,105,180)" $color="rgb(255,255,255)">아이디</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="350" $inputFontSize="25"/>
        <div>아이디 확인</div>
      </SInputLabelContainer>

      <SInputLabelContainer $gapSize="10px">
        <SLabelBox $fontSort="medium" $backgroundColor="rgb(255,105,180)" $color="rgb(255,255,255)">이름</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="350" $inputFontSize="25"/>
      </SInputLabelContainer>

      <SInputLabelContainer $gapSize="10px">
        <SLabelBox $fontSort="medium" $backgroundColor="rgb(255,105,180)" $color="rgb(255,255,255)">이메일</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="350" $inputFontSize="25"/>
      </SInputLabelContainer>

      <SInputLabelContainer $gapSize="10px">
        <SLabelBox $fontSort="medium" $backgroundColor="rgb(255,105,180)" $color="rgb(255,255,255)">비밀번호</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="350" $inputFontSize="25"/>
      </SInputLabelContainer>

      <SInputLabelContainer $gapSize="10px">
        <SLabelBox $fontSort="medium" $backgroundColor="rgb(255,105,180)" $color="rgb(255,255,255)">비밀번호 확인</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="350" $inputFontSize="25"/>
      </SInputLabelContainer>

      </div>
    </SJoinCenterLayout>
  )
}

export default Join

const SJoinCenterLayout = styled(SCenterLayout)`
  margin-top: 30px;
`