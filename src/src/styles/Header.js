import styled from 'styled-components';
import Responsive from './Responsive';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba (0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: spac-between;
    .logo {
        font-size: 1.125rem;
        font-weight: 800;
        lettert-spacing: 2px;
    }
    .right {
        display: flex;
        align-item: center;
    }
`;

const Spacer = styled.div`
    height: 4rem;
`;

const UserInfo = styled.div`
    font-wegiht: 800;
    margin-right: 1rem;
`;

const Header = ({ user }) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Button to="/" style={{ justifyContent: 'flex-start' }}>
                        홈
                    </Button>
                    <h1> 냠냠냠 </h1>
                    {user ? (
                        <div className="right">
                            <UserInfo>{user.username}</UserInfo>
                            <Button styled={{ justifyContent: 'flex-end' }}>로그아웃</Button>
                        </div>
                    ) : (
                        <div className="right">
                            <Button to="/login" style={{ justifyContent: 'flex-end' }}>
                                로그인
                            </Button>
                        </div>
                    )}
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;
