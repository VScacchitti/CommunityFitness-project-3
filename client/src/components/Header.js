import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from '../components/auth/AuthOptions';

function Header() {
  return (
    <header>
      <div className="logo">Community Fitness</div>
      <nav>
        <Link to="/">
          <button id="home">
          <i className="fas fa-home"></i>
          </button>
        </Link>
        <AuthOptions />
      </nav>
    </header>
  );
}

export default Header;
