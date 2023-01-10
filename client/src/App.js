import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Home from "pages/Home";
import Login from "pages/Login";
import Market from "pages/Market";
import Mypage from "pages/Mypage";
import NFTMint from "pages/NFTMint";
import Post from "pages/Post";
import PostDetail from "pages/PostDetail";
import Signup from "pages/Signup";
import NotFound from "pages/NotFound";
import WritePost from "pages/WritePost";

function App() {
  return (
    <BrowserRouter>
      <div className="App min-w-[1300px]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/market" element={<Market />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/nftmint" element={<NFTMint />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/postdetail/:id" element={<PostDetail />}></Route>
          <Route path="/writepost" element={<WritePost />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
