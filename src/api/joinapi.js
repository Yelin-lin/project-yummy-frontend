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

export {checkId};