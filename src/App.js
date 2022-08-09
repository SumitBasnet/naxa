import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContent from "./components/MainContent";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import FormRegistration from "./components/FormRegistration";
import Maps from "./components/Maps";

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Portfolio />
      {/* <FormRegistration /> */}
      {/* <Maps /> */}
      <Footer />
    </>
  );
};

export default App;
