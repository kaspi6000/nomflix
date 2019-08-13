import React from "react";
import Tv from "./Tv";
import { tvApi } from "../../utils";

class TvContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  };
  initialState = this.state;

  async componentDidMount() {
    document.title = "Manflix | TV Show";
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      // throw Error();
      this.setState({ topRated, popular, airingToday, error: null });
    } catch {
      this.setState({ error: "Can't find TV Show information." });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentWillUnmount() {
    this.setState(this.initialState);
  }

  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;
    return (
      <Tv
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}

export default TvContainer;
