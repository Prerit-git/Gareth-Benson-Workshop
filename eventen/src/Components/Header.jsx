import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Search from '../Components/Search'

const socialIcons = [
  {
    icon: 'facebook',
    link: 'https://www.facebook.com/IICSIndiaorg?mibextid=ZbWKwL'
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/iicsindiaorg/'
  },
  {
    icon: 'youtube-play',
    link: 'https://www.youtube.com/@IICSIndiaorg'
  },
  {
    icon: 'whatsapp',
    link: 'https://wa.me/9594949959'
  },
]

const Header = () => {
  return (
    <header className="main_header_area position-absolute w-100 site-header">
      {/* Top bar with social and contact info */}
      <div className="header-content text-white">
        <div className="container">
          <div className="header-content-inner py-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="social-links">
                  <ul className="m-0 p-0 d-flex gap-2">
                    {socialIcons.map((icon, i) => (
                      <li key={i} className="d-inline">
                        <a href={`${icon.link}`} target='_blank'>
                          <i className={`fa fa-${icon.icon} border-social rounded-circle text-center`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="header-event-info text-end">
                  <ul className="m-0 p-0">
                    <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                      <i className="fa fa-phone pe-1"></i>
                      <a href="tel:959-4949-959">
                      <small>+91 959-4949-959</small>
                      </a>
                    </li>
                    <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                      <i className="fa fa-envelope-o pe-1"></i>
                      <a href="mailto:info@iicsindia.org">
                      <small>info@iicsindia.org</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="header_menu" id="header_menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-2 w-100">
            <div className="row w-100 align-items-center">
              <div className="col-lg-3 col-md-6">
                <div className="navbar-brand m-0">
                  <img src="https://iicsindia.org/images/IICS/iics_image/logo_main_white.webp" alt="Logo" className="w-100" />
                </div>
              </div>

              <div className="col-lg-8 col-md-6">
                <Navbar/>
              </div>  

              <div className="col-lg-3">
                <div className="menu-search text-end">
                  {/* <Search /> */}
                  {/* <a href="https://rzp.io/rzp/QaOH6esm" target='_blank' className="btn btn3">
                    Register Now <i className="fa fa-long-arrow-right ms-4"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </nav>
          <div id="slicknav-mobile"></div>
        </div>
      </div>

      {/* Search Overlay */}
      <div id="search1">
        <button type="button" className="close">&times;</button>
        <form>
          <input
            className="form-control form-control-lg rounded text-white"
            placeholder="Search..."
          />
        </form>
        <button type="button" className="btn">
          <i className="fa fa-search text-white" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
