import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { useState } from "react";
import Login from "./pages/login/Login";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Router>
      <div
        className={`fixed top-0 left-0 w-screen h-screen z-[20] bg-[#00000003] backdrop-blur-lg ${
          isMenuOpen ? "block" : "hidden"
        }`}
      ></div>
      <div>
        <Switch>
          <Route exact path="/">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
