import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import home from "./components/home";
import about from "./components/about";
import portfolio from "./components/portfolio";
import hireMe from "./components/hireMe";
import team from "./components/team";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={home} />
      <Route exact path="/about" component={about} />
      <Route exact path="/portfolio" component={portfolio} />
      <Route exact path="/hireMe" component={hireMe} />
      <Route exact path="/team" component={team} />

      <Footer />
    </Router>
  );
}

export default App;
