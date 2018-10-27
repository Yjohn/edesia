import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <span className="App-logo">
      <Link className="logo" to="/">
        Edesia
      </Link>
    </span>
  );
};
export default Logo;
