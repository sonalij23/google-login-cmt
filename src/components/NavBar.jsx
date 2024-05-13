import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeColor = ({ isActive }) => {
    return isActive ? "bg-pumpkin text-white rounded-xl py-2 px-3" : "";
  };
  return (
    <header className="flex items-center justify-between w-full px-5 py-2 border-b md:px-20">
      <NavLink to={"/"}>

        <div className="flex items-center gap-5">
          <img
            className="w-16"
            src="https://clonemytrips.com/_next/image?url=%2Flogo.png&w=96&q=75"
            alt="logo"
          />
          <h1 className="text-xl font-semibold">Clone My Trips</h1>{" "}
        </div>
      </NavLink>
      <nav className="hidden lg:w-1/4 md:w-1/2 md:block">
        <ul className="flex items-center justify-between w-full font-semibold ">
          <li>
            <NavLink className={activeColor} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>About</li>
          <li>
            <NavLink className={activeColor} to={"/login"}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="md:hidden">
        <NavLink className={activeColor} to={"/login"}>
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
