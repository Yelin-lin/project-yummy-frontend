import axios from "axios";

// 아이디 확인
const checkId = async (username) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/auth/check`,
    {
      username,
    },
    { withCredentials: true }
  );
  return response.data;
};

// 회원가입
const signUp = async (userData) => {
    const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/auth/sign-up`,
    userData,
    { withCredentials: true }
    );
    return response.data; // 요청에 대한 응답 데이터 반환
  };

export {checkId, signUp};