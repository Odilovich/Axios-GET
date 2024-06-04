import { Routes, Route } from "react-router-dom";
import Comments from "./components/comments"
import Posts from "./components/posts"
import Albums from "./components/albums"
import Photos from "./components/photos"
import Todos from "./components/todos"
import Users from "./components/users"
// import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} >
        <Route index element={<Users />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="todos" element={<Todos />} />
        </Route>
        
        
      </Routes>
      
    </>
  );
};

export default App;