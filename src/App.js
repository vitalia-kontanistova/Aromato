import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import Thanks from "./components/Thanks/Thanks";
import Test from "./components/Test/Test";
import RegistrationContainer from "./components/Registration/RegistrationContainer";
import LandingContainer from "./components/Landing/LandingContainer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Route exact path="/Aromato/" component={LandingContainer} />
          <Route path="/Aromato/logIn" component={LogIn} />
          <Route path="/Aromato/reg" component={RegistrationContainer} />
          <Route path="/Aromato/thanks" component={Thanks} />
          <Route path="/Aromato/test" component={Test} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
