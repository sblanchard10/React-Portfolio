import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
