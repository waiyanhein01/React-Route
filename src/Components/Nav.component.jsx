import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav>
      <ul className=" flex space-x-5 justify-center items-center text-blue-500 no-underline pt-5">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/book"}>Book</Link>
        </li>
        <li>
          <Link to={"/book/2"}>DetailBook2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
