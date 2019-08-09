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
    document.title = "Manflix | Movie";
    try {
      const {
        data: { results: nowPlaying }
      } = await movieApi.nowPlaying();
      const {
        data: { results: upComing }
      } = await movieApi.upComing();
      const {
        data: { results: popular }
      } = await movieApi.popular();
      // throw Error();
      this.setState({ nowPlaying, upComing, popular, error: null });
    } catch {
      this.setState({ error: "Can't find movie information." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state;
    return <Home nowPlaying={nowPlaying} upComing={upComing} popular={popular} error={error} loading={loading} />;
  }
}

export default HomeContainer;
