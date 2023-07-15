import React from 'react'
import { styled } from 'styled-components'

function Header({pageName}) {
  
  return (
    <SHeaderContainer>
      <SIconContainer>
        <SIconBox>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg>
        </SIconBox>
        <SIconBox>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
        </SIconBox>
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
  fill: rgb(255, 255, 255);
  /* background-color: rgb(0,0,0); */
`