import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import Thanks from "./components/Thanks/Thanks";
import Test from "./components/Test/Test";
import RegistrationContainer from "./components/Registration/RegistrationContainer";
import { HowItWorksWithWidthRedirect } from "./components/Landing/HowItWorks/HowItWorksContainer";
import { HowItLooksWithWidthRedirect } from "./components/Landing/HowItLooks/HowItLooksContainer";
import { OfferWithWidthRedirect } from "./components/Landing/Offer/OfferContainer";
import { WhyWithWidthRedirect } from "./components/Landing/Why/WhyContainer";
import LandingContainer from "./components/Landing/LandingContainer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Route exact path="/" component={LandingContainer} />
          <Route path="/reg" component={RegistrationContainer} />
          <Route path="/thanks" component={Thanks} />
          <Route path="/test" component={Test} />

          <Route path="/offer" component={OfferWithWidthRedirect} />
          <Route path="/how-it-works" component={HowItWorksWithWidthRedirect} />
          <Route path="/how-it-looks" component={HowItLooksWithWidthRedirect} />
          <Route path="/why" component={WhyWithWidthRedirect} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
