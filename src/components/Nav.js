import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <NavLink
        to="/"
        style={{
          border: ".4rem solid firebrick",
          borderBottom: "solid .41rem firebrick",
          borderRadius: "15px",
          padding:"1rem 2rem"
        }}
      >
        Home
      </NavLink>
      <NavLink to="/pizza">Pizza</NavLink>
    </div>
  );
};
