import React from "react";
import { useLocation } from "react-router-dom";
export const HeaderText = () => {
  let location = useLocation();

  return (
    <h2>
      {location.pathname == "/pizza" ? location.pathname + "time" : "home"}
    </h2>
  );
};
