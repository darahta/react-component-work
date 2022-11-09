import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/post" element={<Posts />} />
         <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>
   );
}

export default App;
