import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/Home";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route path={""} component={Home} />
    </Router>
  );
}

export default App;
