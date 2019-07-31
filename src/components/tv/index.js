import React from "react";
import Tv from "./Tv";

class TvContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  };
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
