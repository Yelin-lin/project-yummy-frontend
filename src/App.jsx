import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { styled } from 'styled-components';

function App() {
  return (
    <PageContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
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
