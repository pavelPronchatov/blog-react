import MainContainer from "../components/MainContainer";
import React, {useEffect} from "react";
import EditBtn from "../components/EditBtn/EditBtn";
import PostList from "../components/PostList/PostList";
import {useDispatch} from "react-redux";
import {setPosts} from "../redux/actions/actions";
import Pagination from "../components/Pagination/Pagination";

export default function Home() {
  const dispatch =  useDispatch();
  useEffect(() => {
    dispatch(setPosts());
  }, []);

  return (
    <MainContainer titlePage={"Blog"}>
      <EditBtn/>
      <PostList/>
      <Pagination/>
    </MainContainer>
  )
}
