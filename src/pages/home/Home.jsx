import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Button } from '@chakra-ui/react';
import { SCenterLayout } from '../../styles/globalstyles';
import SelectMenu from './SelectMenu';
import axios from 'axios';

function Home() {
  const [yummyPlaceList, setYummyPlaceList] = useState(null);
  const [regionSelect, setRegionSelect] = useState('');
  const [sortSelect, setSortSelect] = useState('');

  const fetchYummyPlaceList = async () => {
    const { data } = await axios.get("http://localhost:4000/postListHome");
    setYummyPlaceList(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  }; 

  useEffect(() => {
    fetchYummyPlaceList();
  }, []);

  const regionList = [
    { id: '0', name: '전체'},
    { id: '1', name: '서울' },
    { id: '2', name: '경기도' },
    { id: '3', name: '강원도' },
    { id: '4', name: '충청도' },
    { id: '5', name: '경상도' },
    { id: '6', name: '전라도' },
    { id: '7', name: '제주도' },
  ];

  const sortList = [
    { id:'0', name: '전체'},
    { id: '1', name: '한식' },
    { id: '2', name: '중식' },
    { id: '3', name: '일식' },
    { id: '4', name: '양식' },
    { id: '5', name: '카페' },
  ];

  const handleRegionSelect = (selectedRegion) => {
    setRegionSelect(selectedRegion);
  };

  const handleSortSelect = (selectedSort) => {
    setSortSelect(selectedSort);
  };

  const handleSendToServer = async () => {
    const params = new URLSearchParams();
    params.set('region', regionSelect);
    params.set('sort', sortSelect);
    const queryString = params.toString();

    // 서버에 queryString을 전송하는 로직을 추가해주세요
    // 예: axios 라이브러리를 사용한 POST 요청

    ///api/posts?region=%EC%84%9C%EC%9A%B8&sort=%EC%96%91%EC%8B%9D
    try {
      const response = await axios.get(`/api/posts?${queryString}`);
      console.log(response.data);
      // 서버로부터 받은 데이터를 활용한 추가 작업 수행
    } catch (error) {
      console.error(error);
    }
  };

  console.log(yummyPlaceList);

  return (
    <SCenterLayout>
      <SSelctLayout>
        <Button size="lg" colorScheme="orange">
          지역
        </Button>
        <SelectMenu
          options={regionList}
          selectedOption={regionSelect}
          onSelectOption={handleRegionSelect}
        />
        <Button size="lg" colorScheme="orange">
          종류
        </Button>
        <SelectMenu
          options={sortList}
          selectedOption={sortSelect}
          onSelectOption={handleSortSelect}
        />
        <Button size="lg" colorScheme="orange" onClick={handleSendToServer}>찾아보기</Button>
      </SSelctLayout>

      
    </SCenterLayout>
  );
}

export default Home;

const SSelctLayout = styled.div`
  display: flex;
  gap: 30px;

  margin-top: 30px;
`