import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import DetailPage from "./pages/detailPage/DetailPage";
import Post from "./pages/post/Post";
import MyPage from "./pages/mypage/MyPage";
import Modify from "./pages/modify/Modify";

import { styled } from "styled-components";
import Join from "./pages/join/Join";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";

const queryClient = new QueryClient();

function App() {
  // const isLogin = false;

  return (
    <QueryClientProvider client={queryClient}>
      <PageContainer>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header pageName="냠냠냠" />
                  <Home />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Header pageName="로그인" />
                  <Login />
                </>
              }
            />
            <Route
              path="/join"
              element={
                <>
                  <Header pageName="회원가입" />
                  <Join />
                </>
              }
            />
            <Route path="/DetailPage/:shopname" element={<DetailPage />} />
            <Route path="/Post" element={<Post />} />
            <Route path="/MyPage" element={<MyPage />} />
            <Route path="/Modify" element={<Modify />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </QueryClientProvider>
  );
}

export default App;

const PageContainer = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
  /* background-color: rgb(0,0,0); */
`;
