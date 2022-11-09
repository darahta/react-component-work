import React from "react";
import { Link } from "react-router-dom";

const PostComponents = (props) => {
   const { post } = props;
   return (
      <div>
         <div>
            <p>{post.id}</p>
            <Link to={"/post/" + post.id}>{post.title}</Link>
         </div>
      </div>
   );
};

export default PostComponents;
