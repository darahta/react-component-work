import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
   const params = useParams();

   const [post, setPost] = useState(null);

   useEffect(() => {
      axios
         .get("https://jsonplaceholder.typicode.com/posts/" + params.postId)
         .then((res) => {
            console.log(res);
            setPost(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   if (post === null) {
      return <p>loading</p>;
   }

   console.log(params);
   return (
      <div>
         <Header from={"about"} />
         <p>post detail gelecek</p>
         <p>{post.title}</p>
         <p>{post.body}</p>
      </div>
   );
};

export default PostDetail;
