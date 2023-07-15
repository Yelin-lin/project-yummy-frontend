import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './components/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <PageContainer>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header pageName='냠냠냠' />
                <Home />
              </>
            }
          />
          <Route 
            path='/login' 
            element={
              <>
                <Header pageName='로그인' />
                <Login />
              </>
          } />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;
