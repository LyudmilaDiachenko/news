import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'

export default function Nav() {
  return (
    <div className="nav">
      <NavLink to="/news">News</NavLink>
      <NavLink to="/weather">Weather</NavLink>
    </div>
  );
}
