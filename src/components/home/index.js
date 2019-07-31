import React from "react";
import Home from "./Home";
import { movieApi } from "../../utils";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const nowPlaying = await movieApi.nowPlaying();
      this.setState({ nowPlaying: nowPlaying });
    } catch {
      this.setState({ error: "Can't find movies information." });
    } finally {
      this.setState({ loading: false });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { nowPlaying } = this.state;
    if (nowPlaying === nextState.nowPlaying) return false;
    return true;
  }

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state;
    console.log(nowPlaying);
    return (
      <Home
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default HomeContainer;
