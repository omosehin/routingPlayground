import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import Blog from "./component/Blog";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Blog" component={Blog} />
        <Route path="/AboutUs" component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
