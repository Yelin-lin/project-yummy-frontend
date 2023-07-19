import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { LockIcon, UnlockIcon, EditIcon } from '@chakra-ui/icons';

function Header({ pageName }) {
  const HOMEICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
      <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
    </svg>
  );

  const MENICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
      <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/>
      </svg>
  );

  const navigate = useNavigate();
  const loginCheckToken = localStorage.getItem('token');

  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <SHeaderContainer>
      <SIconContainer>
        <SIconBox onClick={() => {
          navigate('/');
        }}>{HOMEICON}</SIconBox>

        {loginCheckToken ? (
          // 로그인 상태인 경우 아이콘
          <SRightIconBox>
            <UnlockIcon
            color="white"
            cursor="pointer"
            _hover={{
              color: '#ED8936',
            }}
            onClick={logoutHandler}/>
            <EditIcon
              color="white"
              cursor="pointer"
              _hover={{
                color: '#ED8936',
              }}
              onClick={() => {
                navigate('/post');
              }}
              />
              <SIconBox
                onClick={() => {
                  navigate('/myPage');
                }}
              >
                {MENICON}
              </SIconBox>
          </SRightIconBox>
        ) : (
          // 로그인 상태가 아닌 경우 아이콘
          <LockIcon
            color="white"
            cursor="pointer"
            _hover={{
              color: '#ED8936',
            }}
            onClick={() => {
              navigate('/login');
            }}
          />
        )}
      </SIconContainer>
      <div>{pageName}</div>
    </SHeaderContainer>
  );
}

export default Header;

// 나머지 스타일 컴포넌트 코드
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
  width: 60px;

  fill: rgb(255, 255, 255);

  cursor: pointer;

  &:hover{
    fill: #ED8936;
  }
  /* background-color: rgb(0,0,0); */
`

const SRightIconBox = styled.div`
  display: flex;
  gap: 13px;
`