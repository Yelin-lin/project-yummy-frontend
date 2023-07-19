import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { SCenterLayout } from "../../styles/globalstyles";
import SelectMenu from "./SelectMenu";
import axios from "axios";
import Pagination from "./Pagination";

function Home() {
  const [yummyPlaceList, setYummyPlaceList] = useState([]);
  const [regionSelect, setRegionSelect] = useState("");
  const [sortSelect, setSortSelect] = useState("");
  const [page, setPage] = useState(1); // 페이지 상태

  const fetchYummyPlaceList = async () => {
    const { data } = await axios.get("http://13.125.224.157/api/posts");
    setYummyPlaceList(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchYummyPlaceList();
    };
    fetchData();
  }, []);

  const regionList = [
    { id: "0", name: "전체" },
    { id: "1", name: "서울" },
    { id: "2", name: "경기도" },
    { id: "3", name: "강원도" },
    { id: "4", name: "충청도" },
    { id: "5", name: "경상도" },
    { id: "6", name: "전라도" },
    { id: "7", name: "제주도" },
  ];

  const sortList = [
    { id: "0", name: "전체" },
    { id: "1", name: "한식" },
    { id: "2", name: "중식" },
    { id: "3", name: "일식" },
    { id: "4", name: "양식" },
    { id: "5", name: "카페" },
  ];

  const handleRegionSelect = (selectedRegion) => {
    setRegionSelect(selectedRegion);
  };

  const handleSortSelect = (selectedSort) => {
    setSortSelect(selectedSort);
  };
  //코드 간결화 고민
  const handleSendToServer = async () => {
    if (
      (sortSelect === "전체" || sortSelect === "") &&
      (regionSelect === "전체" || regionSelect === "")
    ) {
      const { data } = await axios.get("http://13.125.224.157/api/posts");
      setYummyPlaceList(data);
    } else {
      let queryString = "";

      if (sortSelect === "전체" || sortSelect === "") {
        queryString = `region=${encodeURIComponent(regionSelect)}`;
      } else if (regionSelect === "전체" || regionSelect === "") {
        queryString = `sort=${encodeURIComponent(sortSelect)}`;
      } else if (sortSelect !== "전체" && regionSelect !== "전체") {
        queryString = `sort=${encodeURIComponent(
          sortSelect
        )}&region=${encodeURIComponent(regionSelect)}`;
      }

      try {
        const { data } = await axios.get(
          `http://13.125.224.157/api/posts/params?${queryString}`
        );
        setYummyPlaceList(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  console.log(yummyPlaceList);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const itemsPerPage = 6;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = yummyPlaceList.slice(startIndex, endIndex);
  //   Pagination의 activePage와 itemsCountPerPage 값을 사용하여 보여줄 페이지와 페이지당 아이템 개수를 설정합니다.
  // yummyPlaceList 배열을 페이지별로 잘라서 보여줄 아이템들을 결정합니다.
  // slice 메서드를 사용하여 yummyPlaceList 배열을 현재 페이지에 해당하는 아이템만 선택합니다.
  // 선택된 아이템들을 사용하여 SYummyPlaceBox 컴포넌트를 렌더링합니다.

  return (
    <>
      <div style={{ height: "480px" }}>
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
            <Button size="lg" colorScheme="orange" onClick={handleSendToServer}>
              찾아보기
            </Button>
          </SSelctLayout>
        </SCenterLayout>

        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {displayedItems.map((item) => (
            <SYummyPlaceBox key={item.id} w="100%" h="40">
              <SYummyPlaceImg src={item.imgurl} />
              <p>{item.shopname}</p>
              <div>
                #{item.region} &nbsp; #{item.sort}
              </div>
            </SYummyPlaceBox>
          ))}
        </Grid>
      </div>

      <Pagination
        activePage={page}
        itemsCountPerPage={6}
        totalItemsCount={yummyPlaceList.length}
        onChange={handlePageChange}
      />
    </>
  );
}

export default Home;

const SSelctLayout = styled.div`
  display: flex;
  gap: 30px;
  margin: 25px 0px;
`;

const SYummyPlaceBox = styled(GridItem)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  p {
    font-size: 30px;
    font-weight: 700;
    display: none;
  }
  div {
    font-size: 18px;
    font-weight: 600;
    display: none;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
    p,
    div {
      display: block;
    }
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
