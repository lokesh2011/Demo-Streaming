import React from "react";
import "./CSS folder/Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>DEMO Streaming</h1>
      </Link>
      <div>
        <Link to="/">Log in</Link>
        <button>Start your free trial</button>
      </div>
    </div>
  );
}

export default Header;
