import Header from "./src/Header/Header";
import "./App.css";
import Footer from "./src/Footer/Footer";
import { Route } from "react-router-dom";
import LogIn from "./src/LogIn/LogIn";
import Landing from "./src/Landing/Landing";
import Registration from "./src/Registration/Registration";
import Thanks from "./src/Thanks/Thanks";
import Test from "./src/Test/Test";

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
            <Registration />
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
