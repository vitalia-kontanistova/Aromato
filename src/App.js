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
          <Route exact path="/" component={LandingContainer} />
          <Route path="/logIn" component={LogIn} />
          <Route path="/reg" component={RegistrationContainer} />
          <Route path="/thanks" component={Thanks} />
          <Route path="/test" component={Test} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
