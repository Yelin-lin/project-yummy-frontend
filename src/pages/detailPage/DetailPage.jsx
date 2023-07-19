import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../components/common/Button';
import WriteBox from './writeComent/WriteBox';
// import styled from 'styled-components';
//import Palette from '../../lib/styles/Palette';

// const SubInfo = styled.div`
//     color: ${Palette.gray[4]};
//     padding-left: 0.25rem;
//     padding-right: 0.25rem;
//     content: '\\B7';
// `;

function DetailPage() {
    const [posts, setPosts] = useState([]);
    const getPosts = async postId => {
        try {
            axios.get('http://localhost:4000/posts/:{posts.id}').then(res => {
                setPosts(res.data);
            });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <header>
                <Button to="/">홈 아이콘</Button>
                <Button to="/Post">새글 아이콘</Button>
                <h1>게시글 상세정보</h1>
            </header>

            <div>
                {posts.map(post => {
                    return (
                        <div key={post.id}>
                            <p>가게 이름: {post.Shopname}</p>
                            <p>지역: {post.region}</p>
                            <p>분류: {post.sort}</p>
                            <p>주소: {post.address}</p>

                            <p>내용: {post.content}</p>
                        </div>
                    );
                })}
            </div>

            <div>
                <WriteBox />
            </div>
        </div>
    );
}

export default DetailPage;
