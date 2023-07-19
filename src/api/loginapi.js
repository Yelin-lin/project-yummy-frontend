import axios from "axios";

//로그인
const handleLogin = async (id, password) => {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/login`,
      {
        username: id,
        password: password,
      },
      {withCredentials: true}
    );
  return response;
};

export {handleLogin};