import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import DetailPage from './pages/detailPage/DetailPage';
import Post from './pages/post/Post';
import MyPage from './pages/mypage/MyPage';
import Modify from './pages/modify/Modify';

import { styled } from 'styled-components';

function App() {
    // const isLogin = false;

    return (
        <PageContainer>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/DetailPage/:shopname" element={<DetailPage />} />
                    <Route path="/Post" element={<Post />} />
                    <Route path="/MyPage" element={<MyPage />} />
                    <Route path="/Modify" element={<Modify />} />
                </Routes>
            </BrowserRouter>
        </PageContainer>
    );
}

export default App;

const PageContainer = styled.div`
    min-width: 800px;
    max-width: 1200px;
    margin: 0 auto;
    /* background-color: rgb(0,0,0); */
`;
