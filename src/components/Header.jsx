import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      {" "}
      <h1>Hacker News</h1>
      <div className="nav-link">
        <NavLink to="news/top">
          Top Stories
        </NavLink>
        <NavLink to="news/new">
          Latest Stories
        </NavLink>
        <NavLink to="news/best">
          Best Stories
        </NavLink>
      </div>
    </>
  );
}
