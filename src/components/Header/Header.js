import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="header1">
        <h1> Entertainment Zone </h1>
      </div>
    </Link>
  );
};

export default Header;
