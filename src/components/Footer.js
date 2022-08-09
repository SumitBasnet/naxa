import React from "react";

const Footer = () => {
  return (
    <footer className="footer-all section">
      <div className="footerhead">
        <div className="container">
          <div className="footerhead-content">
            <div>
              <h2>Seeking Collaboration?</h2>
            </div>
            <div>
              <p>
                We constantly look forward to exploring ideas, collaborations,
                and technical innovations. If you want to partner with us, we
                are just an email away.
              </p>
            </div>
            <a type="button" className="forward-button">
              <span>Let's Talk</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-left">
              <a href="" className="footer-logo">
                <img src="/assets/naxalogo.png" alt="naxalogo" />
              </a>
              <div className="location">
                <h6>
                  <p>Naxa Pvt Ltd.</p>
                </h6>
                <address>
                  <p>Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal</p>
                  <p>
                    <a href="" style={{ textDecoration: "none" }}>
                      14416543
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@naxa.com.np">info@naxa.com.np</a>
                  </p>
                </address>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-left">
              <h6>Services</h6>
              <ul className="portfoliolist">
                <li>
                  <h6>
                    <a href="">Portfolio</a>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-left">
              <h6>Company</h6>
              <ul className="portfoliolist">
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Work with us</a>
                </li>
                <li>
                  <h6 style={{ marginTop: "10px" }}>
                    <a href="">
                      {" "}
                      <b> Contact </b>{" "}
                    </a>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <div className="social-links">
            <a href="facebook.com">
              <img src="/assets/facebook.svg" alt="" />
            </a>
            <a href="linkedin.com">
              <img src="/assets/linkedin.svg" alt="" />
            </a>
            <a href="twitter.com">
              <img src="/assets/twitter.svg" alt="" />
            </a>
            <a href="instagram.com">
              <img src="/assets/instagram.svg" alt="" />
            </a>
          </div>
          <p>&copy Naxa 2020. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
