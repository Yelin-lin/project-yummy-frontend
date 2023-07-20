import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from '../../components/common/Button';
import WriteBox from './writeComent/WriteBox';
import styled from 'styled-components';

//import Palette from '../../lib/styles/Palette';

// const SubInfo = styled.div`
//     color: ${Palette.gray[4]};
//     padding-left: 0.25rem;
//     padding-right: 0.25rem;
//     content: '\\B7';
// `;

const Page = styled.div`
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
`;

function DetailPage() {
    const [posts, setPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태
    const { shopname } = useParams();

    // 로그인 상태를 확인하는 함수
    const checkLoginStatus = () => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // 토큰이 존재하면 isLoggedIn을 true로 설정
    };

    const getPosts = async postId => {
        try {
            axios.get('http://13.125.224.157/api/posts/{postId}').then(res => {
                setPosts(res.data);
            });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getPosts();
        checkLoginStatus(); // 컴포넌트가 마운트될 때 로그인 상태를 확인
    }, []);

    const filteredPosts = posts.filter(post => post.shopname === shopname);
    console.log(filteredPosts);

    return (
        <div>
            <header>
                <Button to="/">홈 아이콘</Button>
                {isLoggedIn ? <Button to="/Post">새글 아이콘</Button> : null}
                <Page>게시글 상세정보</Page>
            </header>
            <div>
                {filteredPosts.map(post => (
                    <div key={post.id}>
                        <p>가게 이름: {post.shopname}</p>
                        <p>지역: {post.region}</p>
                        <p>분류: {post.sort}</p>
                        <p>주소: {post.address}</p>

                        <p>내용: {post.content}</p>
                    </div>
                ))}
            </div>

            <div>
                <WriteBox />
            </div>
        </div>
    );
}

export default DetailPage;
