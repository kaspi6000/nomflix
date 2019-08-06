import React from "react";
import Detail from "./Detail";

class DetailContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }

    try {
    } catch {
    } finally {
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return <Detail result={result} error={error} loading={loading} />;
  }
}

export default DetailContainer;
