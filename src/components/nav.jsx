import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <NavLink to="/">Main</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/weather">Weather</NavLink>
    </div>
  );
}
