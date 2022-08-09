import React from "react";

const Header = () => {
  return (
    <header>
      <div className="headertop">
        <div className="headerinside">
          <a href="" className="heading-button">
            <span>
              We have been working on several voluntary initiatives during the
              COVID-19 pandemic. Check them out
            </span>
            <i className="material-icons"></i>
          </a>
        </div>
        <div className="container">
          <div className="headernav">
            <a href="" className="headerlogo">
              <img src="/assets/naxalogo.png" alt="logo" />
            </a>
            <div className="navigation">
              <nav className="main-navigation is-dark active">
                <ul>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Porfolio</a>
                  </li>
                  <li>
                    <a href="">Company</a>
                  </li>
                  <li>
                    <a href="">Events & Media</a>
                  </li>
                  <li>
                    <a href="">Blogs</a>
                  </li>
                </ul>
              </nav>
            </div>
            <a href="">
              <button type="button" className="forward-button">
                <span>Let's talk</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
