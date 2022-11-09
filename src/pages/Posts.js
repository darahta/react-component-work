import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import PostComponents from "../components/PostComponents";

const Posts = (props) => {
   //  const navigate = useNavigate();
   const [posts, setPosts] = useState(null);

   useEffect(() => {
      axios
         .get("https://jsonplaceholder.typicode.com/posts")
         .then((res) => {
            console.log(res);
            setPosts(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   if (posts === null) {
      return <h1>loading</h1>;
   }

   return (
      <div>
         <Header from={"home"} />
         <h1>Posts pages</h1>
         {posts.map((item, index) => {
            return <PostComponents key={index} post={item} />;
         })}
      </div>
   );
};

export default Posts;
