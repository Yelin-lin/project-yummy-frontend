import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Palette from '../../lib/styles/Palette';

//import Button from '../../components/common/Button';
//import SubInfo from '../../components/common/SubInfo';
const ListWrapper = styled.div`
    flex-wrap: wrap;
    gap: 12px;
    display: flex;
`;
const PostTemBlock = styled.div`
    border: #b0c0da 1px dashed;
    border-radius: 12px;
    height: 165px;
    width: 270px;
    padding: 12px 24px 12px;
    background-color: aliceblue;
    background-image: url('https://i.namu.wiki/i/Uymut0CpE-aZqD8nAd-ydKs9SvBI5tqfEskjNDGFETdUIEtu2zOM84VP_33AuBHYyok4w7WTM-beIgRDT_qL55XCqHrN4OPtDl8YREGiEyE6ixAC8U_Xu8UaEHV1nTJCVDE9jVrXeFPhgXqPeY0A2Q.svg');
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: right top;
`;
const postBox = styled.div``;
const ButtonSet = styled.div`
    gap: 10px;
    display: flex;
    margin-top: 24px;
`;
const Button = styled.div`
    cursor: pointer;

    height: 40px;
    width: 50%;
    flex-wrap: wrap;
    gap: 12px;
    display: flex;
    padding-left: 1rem;
    border: none;
    background-color: rgb(35, 8, 87);
    border: 2px rgb(35, 8, 87);
    border-radius: 10px;
    color: white;
    font-weight: bold;
    &:hover {
        background: ${Palette.gray[6]};
    }
`;

const SYummyPlaceImg = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    border-radius: 10px;
`;

// const onRemove = useCallback(write => {
//     setLocalWrites(savedData => savedData.filter(w => w !== write));
// }, []);
const PostItem = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = () => {
        axios.get('http://13.125.224.157/api/posts/{postId}').then(res => {
            setPosts(res.data);
        });
    };
    useEffect(() => {
        getPosts();
    }, []);

    const handleRemove = async postId => {
        try {
            await axios.delete(`http://13.125.224.157/api/mypage/${postId}`);
            getPosts(); // 삭제 후 게시물 목록을 다시 가져옴
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ListWrapper>
            {posts.map(post => {
                return (
                    <PostTemBlock key={post.id}>
                        <postBox>
                            {/* <SYummyPlaceImg src={post.imgurl} />*/}
                            {/* post.id로 수정 */}
                            <p>가게이름 : {post.shopname}</p> {/* post.shopname로 수정 */}
                            <p>지역 : {post.region}</p> {/* post.region으로 수정 */}
                            <p>종류 : {post.sort}</p> {/* post.sort로 수정 */}
                        </postBox>
                        <ButtonSet>
                            <Button onClick={() => handleRemove(post.id)}>삭제</Button>
                            <Button onClick={() => handleRemove(post.id)}>수정하기</Button>
                        </ButtonSet>
                    </PostTemBlock>
                );
            })}
        </ListWrapper>
    );
};

export default PostItem;
