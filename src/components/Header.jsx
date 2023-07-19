import { useSeletor, useDispatch } from 'react-redux';
// import {logout} from '././moudles/user'
const HeaderContainer = () => {
    const { user } = useSeletor(({ user }) => ({ user: user.user }));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatchEvent(logout());
    };
    return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
