import React from "react";
import Detail from "./Detail";
import { movieApi, tvApi } from "../../utils";

class DetailContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
    isMovie: this.props.location.pathname.includes("movie")
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parseId = parseInt(id);

    if (isNaN(parseId)) return push("/");
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parseId));
      } else {
        ({ data: result } = await tvApi.showDetail(parseId));
      }
      this.setState({ result, error: null });
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      document.title = `Manflix | ${result.title ? result.title : result.name}`;
      this.setState({ loading: false });
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return <Detail result={result} error={error} loading={loading} />;
  }
}

export default DetailContainer;
