import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-5 py-2 flex justify-center items-center bg-teal-300 gap-10">
      {/* Link ka use */}
      {/* <Link className='text-lg font-semibold' to='/'>Home</Link>
        <Link className='text-lg font-semibold' to='/about'>About</Link>
        <Link className='text-lg font-semibold' to='/contact'>Contact</Link> */}

      {/* NavLink ka use */}
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "blue" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        className="text-lg text-red-400 font-bold"
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={(e) => {
          return [
            (e.isActive ? "text-amber-600" : ""),
            (e.isActive ? "font-semibold" : ""),
          ].join(' ');
        }}
        to="/about"
      >
        About
      </NavLink>

      <NavLink className="text-lg font-semibold" to="/contact">
        {(e) => {
          return <span className={`${e.isActive? 'text-amber-400': 'text-black'}`}>Contact</span>
        }}
      </NavLink>
    </nav>
  );
};

export default Navbar;
