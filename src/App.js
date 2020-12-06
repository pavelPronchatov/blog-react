import './App.scss';
import Header from "./components/Header/Header";
import EditBtn from "./components/EditBtn/EditBtn";
import PostList from "./components/PostList/PostList";
import Pagination from "./components/Pagination/Pagination";
import {useEffect} from "react";
import {mainApi} from "./api/api";
import {useDispatch} from "react-redux";
import {setPostAC} from "./redux/actions/actions";


function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    mainApi.getPostApi()
      .then(data => {
        console.log(data.post);
        dispatch(setPostAC(data.post))
      })
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header/>
        <EditBtn/>
        <PostList/>
        <Pagination/>
      </div>
    </div>
  );
}

export default App;
