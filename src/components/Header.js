import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = (props) => {
   const { from, title } = props;

   return (
      <ul className={from}>
         <li>
            <Link to={"/"}>Home</Link>
         </li>
         <li>
            <Link to={"/about"}>About us</Link>
         </li>
         <li>
            <Link to={"/post"}>Posts</Link>
         </li>

         <li>
            <Link to={"/contact"}>Contact us</Link>
         </li>
         {from === "contact" && (
            <li>
               <a
                  style={{ color: "black" }}
                  href="mailto:mehmedimsm@hotmail.com"
               >
                  mehmedimsm@hotmail
               </a>
            </li>
         )}
      </ul>
   );
};
export default Header;
