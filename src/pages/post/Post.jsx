// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import useInput from '../../hooks/useInput';
import useSelect from '../../hooks/useSelect';
import Styled from 'styled-components';
import Button from '../../components/common/Button';
import axios from 'axios';
import PostItem from './PostList';

const token =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodGlnZXIiLCJleHAiOjE2ODk3ODMwNzQsImlhdCI6MTY4OTc3OTQ3NH0.ed8S1LIiRmwLnn9JtjMV29C9Pwk7Q6MID4_iknLkxuA';
const QuillWrapper = Styled.div`
    .ql-editor {
        padding: 0;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .ql-editor.ql-blank::before {
        left: 0px;
    } 
`;

const Buttons = Styled.div`
text-align: center;
    padding: 10px 10px;
    button {
        display: inline-block;
        font-weight: 1000;
        width: 110px;
        height: 40px;
        color: black;
        background-color: white;
        font-size: 16px;
        border-radius: 20px;
        /*box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);*/
        & + & {
            margin-left: 0.5rem;
        }
    }
`;
const Post = () => {
    const [shopname, onChangeshopnameHandler] = useInput();
    const [address, onChangeaddressHandler] = useInput();
    const [content, onChangecontentHandler] = useInput();
    const [imgurl, onChangeimgurlHandler] = useInput();
    const [region, setRegion] = useState('선택'); // Set the initial state for region
    const [sort, setSort] = useState('선택'); // Set the initial state for sort
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const regionData = [
        { optionKey: 0, value: '선택' },
        { optionKey: 1, value: '서울' },
        { optionKey: 2, value: '경기도' },
        { optionKey: 3, value: '강원도' },
        { optionKey: 4, value: '충청도' },
        { optionKey: 5, value: '경상도' },
        { optionKey: 6, value: '전라도' },
        { optionKey: 7, value: '제주도' },
    ];

    const sortData = [
        { optionKey: 8, value: '선택' },
        { optionKey: 9, value: '카페' },
        { optionKey: 10, value: '중식' },
        { optionKey: 11, value: '양식' },
        { optionKey: 12, value: '한식' },
        { optionKey: 13, value: '일식' },
    ];

    // const regionSelect = useSelect(regionData[0]);
    // const sortSelect = useSelect(sortData[0]);

    const savedData = {
        shopname: shopname,
        address: address,
        region: region,
        sort: sort,
        content: content,
        imgurl: imgurl,
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post(
                'http://localhost:4000/posts',
                savedData,
                // headers: { Accept: '*/*', Authorization: `${token}` },
                //withCredentials: true,
            ); // 데이터를 서버에 보냄
            console.log(savedData);
            navigate('/DetailPage/:shopname'); // 저장된 데이터를 콘솔에 출력 (선택사항)
            // 성공적으로 서버에 데이터를 보냈을 경우, 원하는 동작을 수행하면 됨
            // 예를 들면, 다른 페이지로 이동하거나 폼을 초기화하는 등의 동작 가능
        } catch (error) {
            console.error(error);
            // 데이터를 보내는 데 실패한 경우, 에러 처리
        }
    };
    return (
        <>
            <div className="right">
                <Button to="/">홈 아이콘</Button>
                나의 맛집 추천!!!
            </div>

            <form>
                <label className="postItem"> 가게이름 : </label>
                <input
                    type="text"
                    name="title"
                    value={shopname}
                    onChange={onChangeshopnameHandler}
                    placeholder="가게명을 입력하세요"
                ></input>{' '}
                <br />
                <label className="postItem"> 지역 </label>
                <select value={region} onChange={e => setRegion(e.target.value)}>
                    {regionData.map(({ optionKey, value }) => (
                        <option key={optionKey} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
                <br />
                <label className="postItem">분류 </label>
                <select value={sort} onChange={e => setSort(e.target.value)}>
                    {sortData.map(({ optionKey, value }) => (
                        <option key={optionKey} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
                <br />
                <label className="postItem">주소 : </label>
                <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={onChangeaddressHandler}
                    placeholder="상세 주소를 입력하세요"
                ></input>
                <br />
                <label className="postItem">사진 : </label>
                <input
                    type="text"
                    name="imgurl"
                    value={imgurl}
                    onChange={onChangeimgurlHandler}
                    placeholder="이미지 주속 url을 입력해 주세요"
                ></input>
                <br />
                <label className="postItem">내용 : </label>
                <input
                    type="text"
                    name="content"
                    value={content}
                    onChange={onChangecontentHandler}
                    placeholder="리뷰 작성 주세요"
                ></input>
                <div className={Buttons}>
                    <Button onClick={onSubmit}> 등록 </Button>
                    <Button onClick={goBack}> 취소 </Button>
                </div>
            </form>
        </>
    );
};

export default Post;
