import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import Landing from "./components/Landing/Landing";
import Thanks from "./components/Thanks/Thanks";
import Test from "./components/Test/Test";
import RegistrationContainer from "./components/Registration/RegistrationContainer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <Route path="/reg">
            <RegistrationContainer />
          </Route>
          <Route path="/thanks">
            <Thanks />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
