import React from 'react'
import { SButtonBox, SCenterLayout, SInputBox, SInputLabelContainer, SLabelBox } from '../../styles/globalstyles'
import { styled } from 'styled-components'

function Join() {

  const CHECK_ICON = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/></svg>;

  return (
    <SCenterLayout>
      <SJoinInputLayout>
      <SInputLabelContainer $gapSize="10px" >
        <SLabelBox $fontSort="medium" $backgroundColor="rgb(255,105,180)" $color="rgb(255,255,255)">아이디</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="400" $inputFontSize="25"/>
        <SJoinButtonBox $buttonSort="medium" $color="rgb(255,105,180)" $backgroundColor="rgb(255,255,255)">아이디 중복 확인</SJoinButtonBox>
      </SInputLabelContainer>

      <SInputLabelContainer $gapSize="10px">
        <SLabelBox $fontSort="medium" $backgroundColor="rgb(255,105,180)" $color="rgb(255,255,255)">이름</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="400" $inputFontSize="25"/>
      </SInputLabelContainer>

      <SInputLabelContainer $gapSize="10px">
        <SLabelBox $fontSort="medium" $backgroundColor="rgb(255,105,180)" $color="rgb(255,255,255)">이메일</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="400" $inputFontSize="25"/>
        <div>{CHECK_ICON} 이메일 형식을 맞춰주세요</div>
      </SInputLabelContainer>

      <SInputLabelContainer $gapSize="10px">
        <SLabelBox $fontSort="medium" $backgroundColor="rgb(255,105,180)" $color="rgb(255,255,255)">비밀번호</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="400" $inputFontSize="25"/>
        <div>
          <div>{CHECK_ICON} 숫자를 포함해주세요</div>
          <div>{CHECK_ICON} 기호를 포함해주세요</div>
        </div>
      </SInputLabelContainer>

      <SInputLabelContainer $gapSize="10px">
        <SLabelBox $fontSort="medium" $backgroundColor="rgb(255,105,180)" $color="rgb(255,255,255)">비밀번호 확인</SLabelBox>
        <SInputBox $inputMainColor="255,20,147" $inputHeight="60" $inputWidth="400" $inputFontSize="25"/>
      </SInputLabelContainer>
      </SJoinInputLayout>
      <SButtonBox $buttonSort="big" $color="rgb(255, 255, 255)" $backgroundColor="rgb(255,105,180)">가입하기</SButtonBox>

    </SCenterLayout>
  )
}

export default Join

const SJoinInputLayout = styled.div`
  display: flex;
  flex-Direction: column;
  gap: 20px;

  margin-top: 30px;
`

const SJoinButtonBox = styled(SButtonBox)`
  border: 3px solid rgb(255,105,180);
`