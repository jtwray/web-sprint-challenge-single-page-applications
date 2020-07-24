import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/help">Help</NavLink>
    </div>
  );
};
