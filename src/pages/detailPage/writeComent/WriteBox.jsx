import React, { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../../hooks/useInput';
import palette from '../../../lib/styles/Palette';
import axios from 'axios';
import WriteItem from './WriteItem';

const WriteBoxBlock = styled.div`
width : 100%;
border-top : 1px solid ${palette.gray[2]};
padding-top : 2rem;

h4 {
    color : ${palette.gray[8]}
    margin-top:0;
    margin-bottom:0.5rem;
}
`;

const WriteForm = styled.form`
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 256px;
    border: 1px solid ${palette.gray[9]};
    input,
    button {
        outline: none;
        border: none;
        font-size: 1rem;
    }
    input {
        padding: 0.5rem;
        flex: 1;
        min-width: 0;
    }

    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background: ${palette.gray[8]};
        color: white;
        font-weight: bold;
        &: hover {
            background: ${palette.gray[6]};
        }
    }
`;

const Write = styled.div`
    margin: 10px;
    margin-right: 0.5rem;
    color: ${palette.gray[8]};
    border: 1px solid ${palette.gray[8]};
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background: ${palette.gray[8]};
        color: white;
        font-weight: bold;
        &: hover {
            background: ${palette.gray[6]};
        }
    }
`;

// const SubInfo = styled.div`
//     color: ${palette.gray[6]};

//     span+span: before {
//         color: ${palette.gray[4]};
//         padding-left: 0.25rem;
//         padding-right: 0.25rem;
//         content: '\\B7';
//     }
// `;
// const WriteListBlock = styled.div`
// margin : 20px;
// margin-top : 0.5rem
// padding : 30px;
// border : 1px solid black;
// border-radius : 5px;
// `;

const WriteBox = () => {
    const [comment, onChangecommentHandler, resetComment] = useInput();

    const [comments, setComments] = useState([]);
    const newComment = { comments };
    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/comments', comments);

            setComments(prevComments => [...prevComments, comments]);
            resetComment();
        } catch (error) {
            console.error(error);
            // 데이터를 보내는 데 실패한 경우, 에러 처리
        }
        console.log(comments);
    };

    // useEffect(() => {
    //     setLocalWrites(writes);
    // }, [writes]);

    return (
        <WriteBoxBlock>
            <h4>댓글</h4>
            <WriteForm onSubmit={onSubmit}>
                <input placeholder="댓글을 입력해 주세요" value={comment} onChange={onChangecommentHandler} />
                <button type="submit">추가</button>
            </WriteForm>

            <WriteItem />
        </WriteBoxBlock>
    );
};

export default WriteBox;
