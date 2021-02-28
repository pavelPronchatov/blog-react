import React from 'react';
import EditBtn from "../components/EditBtn/EditBtn";
import PostList from "../components/PostList/PostList";
import Pagination from "../components/Pagination/Pagination";

const MainPage = () => {
  return (
    <>
      <EditBtn/>
      <PostList/>
      <Pagination/>
    </>
  );
};

export default MainPage;