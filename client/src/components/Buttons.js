import React from "react";
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div className="buttons">
      <Link to="/profile">
        <button>
          <i class="fas fa-user"></i>
        </button>
      </Link>
      <Link to="/workout">
        <button>
          <i className="fas fa-plus"></i>
        </button>
      </Link>
      <Link to="/plan">
        <button>
          <i className="fas fa-calendar-alt"></i>
        </button>
      </Link>
      <Link to="/man">
        <button>
          <i class="fas fa-search"></i>
        </button>
      </Link>
      <Link to="/users">
        <button>
          <i className="fas fa-users"></i>
        </button>
      </Link>
    </div>
  );
}

export default Buttons;
