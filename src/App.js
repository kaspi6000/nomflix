import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/Home";
import TV from "./components/Tv";
import Search from "./components/Search";
import Header from "./components/Header";
import GlbalStyle from "./styles/GlobalStyles";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <GlbalStyle />
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default App;
