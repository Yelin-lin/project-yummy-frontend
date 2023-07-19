import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Palette from '../../../lib/styles/Palette';
import axios from 'axios';

const Write = styled.div`
    margin: 10px;
    margin-right: 0.5rem;
    color: ${Palette.gray[8]};
    border: 1px solid ${Palette.gray[8]};
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background: ${Palette.gray[8]};
        color: white;
        font-weight: bold;
        &:hover {
            background: ${Palette.gray[6]};
        }
    }
`;
const ButtonSet = styled.div`
    gap: 10px;
    display: flex;
    margin-top: 24px;
`;

const SubInfo = styled.div`
    color: ${Palette.gray[6]};

    span + span:before {
        color: ${Palette.gray[4]};
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7';
    }
`;
const Button = styled.div`
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${Palette.gray[8]};
    color: white;
    font-weight: bold;
    &: hover {
        background: ${Palette.gray[6]};
        `;

const WriteItem = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = () => {
        axios.get('http://localhost:4000/comments').then(res => {
            setPosts(res.data);
        });
    };
    useEffect(() => {
        getPosts();
    }, []);

    const handleRemove = async postid => {
        try {
            await axios.delete(`http://localhost:4000/comments`);
            getPosts(); // 삭제 후 게시물 목록을 다시 가져옴
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            {posts.map(post => {
                return (
                    <Write>
                        <SubInfo>
                            <p> {post.commentList[0].modifiedAt}</p> {/* post.shopname로 수정 */}
                            <p> {post.commentList[0].username}</p> {/* post.region으로 수정 */}
                            <p> {post.commentList[0].content}</p> {/* post.sort로 수정 */}
                            <ButtonSet>
                                <Button onClick={() => handleRemove(post.postid)}>삭제</Button>
                                {/* <Button onClick={() => handleModify(post.id)}>수정하기</Button> */}
                            </ButtonSet>
                        </SubInfo>
                    </Write>
                );
            })}
            ;{' '}
        </div>
    );
};

export default WriteItem;
