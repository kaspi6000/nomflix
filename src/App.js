import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/home";
import TV from "./components/tv";
import Search from "./components/search";
import Detail from "./components/detail";
import Header from "./components/Header";
import Videos from "./components/videos";
import GlbalStyle from "./styles/GlobalStyles";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <GlbalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Route path="/collections" component={Videos} />
      </Switch>
    </Router>
  );
}

export default App;
