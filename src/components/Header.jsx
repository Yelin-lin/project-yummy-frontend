import React from 'react'
import { styled } from 'styled-components'

function Header({pageName}) {
  
  return (
    <SHeaderContainer>
      <SIconContainer>
        <SIconBox/>
        <SIconBox/>
      </SIconContainer>
      <div>{pageName}</div>
    </SHeaderContainer>
  )
}

export default Header

const SHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 200px;

  position: relative; // icon container position위함

  box-sizing: border-box; // border과 padding에 영향없음

  padding: 0px 30px;

  background-color: rgb(255,182,193);

  div{
    font-size: 40px;
    font-weight: 900;
  }
`

const SIconContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 20px;


  height: 50px;
  width: 95%;
`

const SIconBox = styled.div`
  height: 100%;
  width: 50px;
  background-color: rgb(0,0,0);
`