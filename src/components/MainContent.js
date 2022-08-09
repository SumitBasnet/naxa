import React from "react";

const MainContent = () => {
  return (
    <section className="content-banner">
      <div className="para-banner">
        <div className="container banner-container">
          <div className="banner-caption">
            <h6> Portfolio </h6>
            <div>
              <h1>
                <span style={{ color: " #000000" }}>Diverse,</span>
                <span style={{ color: "#124af4" }}>Impactful,</span>
                <span style={{ color: "#000000" }}>and Reliable.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="line-section">
          <img src="/assets/line.svg" alt="line" />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
