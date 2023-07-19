import styled from 'styled-components';
import Palette from '../../lib/styles/Palette';
import PostItem from '../post/PostList';
import Header from '../../styles/Header';
import WriteItem from '../detailPage/writeComent/WriteItem';

const PostItemBlock = styled.div`
padding-top : 3rem;
padding-bottom:3rem;
justify-content : space-around;
display: flex;
&:first-chid{padding-top:0;

&+& {
    border-top : 1px solid ${Palette.gray[2]};
}
h2 {
    font-size : 2rem;
    margin-bottem : 0;
    margin-top : 0;
p{
    margin-top : 2rem
}`;
const Container = styled.div`
    border-bottom: 1px solid ${Palette.gray[4]};
`;
const Page = styled.h2`
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
`;
const Listwrapper = styled.div`
    flex-wrap: wrap;
    gap: 12px;
`;
const WriteListBlock = styled.div`
    margin : 20px;
    margin-top : 0.5rem
    padding : 30px;

    border-radius : 5px;

`;

// const SubInfo = styled.div`
// color: ${Palette.gray[4]};
// padding-left: 0.25rem;
// padding-right: 0.25rem;
// content: '\\B7';}
// `;
const MyPage = () => {
    // const onRemove = useCallback(write => {
    //     setLocalWrites(prevWrites => prevWrites.filter(w => w !== write));
    // }, []);

    // const todos = useSelector(state => state.todo.todo);
    return (
        <>
            <Container>
                <Header />
                <Page> ❤️ 마이페이지 ❤️ </Page>
            </Container>
            <Container>
                <Listwrapper>
                    <Page>내가 작성한 글 ✍️</Page>
                    <PostItemBlock>
                        <PostItem />
                    </PostItemBlock>
                </Listwrapper>
            </Container>
            <Container>
                <Page>내가 작성한 댓글✍️</Page>
                <WriteListBlock>
                    <WriteItem />
                </WriteListBlock>
            </Container>
        </>
    );
};

export default MyPage;
