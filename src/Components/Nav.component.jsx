import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav>
      <ul className=" flex space-x-5 justify-center items-center text-blue-500 no-underline pt-5">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} state={{Name:'Wai Yan Hein'}}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/book"} >Book</NavLink>
        </li>
        <li>
          <NavLink to={"/book/2"}>DetailBook2</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
