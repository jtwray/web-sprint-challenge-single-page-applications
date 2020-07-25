import React, { useState, useEffect, from } from "react";
import { Link, useLocation } from "react-router-dom";
import pizzaImg from "../Assets/Pizza.jpg";
import { UserStatus } from "../constraints/user-status";
export const Hero = () => {
  const [path, setPath] = useState({ linkPath: "", linkText: "Pizza?" });

  let location = useLocation();

  useEffect(() => {
    location.path == "/"
      ? setPath({ linkPath: "/pizza", linkText: "PIZZA!🍕" })
      : location.path == "/pizza" &&
        setPath({ linkPath: "/", linkText: "HOME🏡" });
  }, [location.path]);

  return (
    <div>
      <Link to={`/${path.linkPath}`}>hero path.linkText==>[[{path.linkText}]]</Link>
    </div>
  );
};
// import React from "react";

// export const Hero = () => {
//     let link;
//       return (
//         <h2>
//           {location.pathname == "/pizza" ? location.pathname + "time" : "home"}
//   );
// };
