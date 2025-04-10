/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
import { Link, NavLink } from "react-router";
export default function Navbar(props) {
  // console.log(props)
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Burger</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {/* <a href="/">Home</a> */}
            <NavLink
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* <a href="/">Home</a> */}
            <NavLink
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              to="/admin"
            >
              Admin
            </NavLink>
          </li>
          <li>
            {/* <a href="/about">About</a> */}
            <NavLink
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              to="/about"
              state="Ahmed"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end relative mr-4">
        <input
          value={props.search}
          onChange={props.handleSearch}
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto mr-4"
        />
        <Link to={"/cart"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <span className="absolute top-0.5 -right-2 rounded-full size-4 bg-amber-300 text-sm flex items-center justify-center">
            {props.noOfItems}
          </span>
        </Link>
      </div>
    </div>
  );
}
