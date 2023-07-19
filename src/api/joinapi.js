import axios from "axios";

// 아이디 확인
const checkId = async (username) => {
  const response = await axios.post(
    'http://13.125.224.157/api/auth/check',
    {
      username,
    },
    { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

// 회원가입
const signUp = async (userData) => {
    const response = await axios.post(
    'http://13.125.224.157/api/auth/sign-up',
    userData,
    { withCredentials: true }
    );
    return response.data; // 요청에 대한 응답 데이터 반환
  };

export {checkId, signUp};