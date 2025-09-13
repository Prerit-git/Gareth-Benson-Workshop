import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="collapse navbar-collapse justify-content-center" id="bs-example-navbar-collapse-1">
        <ul className="navbar-nav align-items-center" id="responsive-menu">

          <li className="nav-item">
            <a href="#home" className="nav-link px-2 my-4 py-0 text-white">Home</a>
          </li>

          <li className="nav-item">
            <a href="#about" className="nav-link px-2 my-4 py-0 text-white">About</a>
          </li>

          {/* Repeat the same pattern for other dropdowns */}

          <li className="nav-item dropdown">
            <a href='#mentors'
              className="nav-link px-2 my-4 py-0 text-white"
              // id="scheduleDropdown"
              // data-bs-toggle="dropdown"
              // aria-expanded="false"
            >
              Mentors
            </a>
            {/* <ul className="dropdown-menu bg-lightgrey p-0 rounded" aria-labelledby="scheduleDropdown">
              <li>
              <Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Eventlists">
              Event List
              </Link>
              </li>
              <li>
              <Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Eventdetail">
              Event Details
              </Link>
              </li>
              </ul> */}
          </li>

              {/* <li className="nav-item">
                <a href="#why-attend" className="nav-link px-2 my-4 py-0 text-white">Benefits</a>
              </li> */}
              <li className="nav-item">
                <a href="#takeaways" className="nav-link px-2 my-4 py-0 text-white">Takeaways</a>
              </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link px-2 my-4 py-0 text-white">Contact</a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
