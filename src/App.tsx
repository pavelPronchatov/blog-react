import './App.scss';
import Header from "./components/Header/Header";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setPosts} from "./redux/actions/actions";
import {Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import EditPage from "./pages/EditPage";
import PostDetail from "./pages/PostDetail/PostDetail";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPosts());
  }, []);


  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Route exact path={'/'} component={MainPage}/>
        <Route exact path={'/edit-page'} component={EditPage}/>
        <Route exact path={'/post-item/:postId'} component={PostDetail}/>
      </div>
    </div>
  );
}

export default App;
