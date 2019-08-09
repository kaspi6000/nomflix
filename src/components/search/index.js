import React from "react";
import Search from "./Search";
import { movieApi, tvApi } from "../../utils";

class SearchContainer extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
    beforTerm: null
  };

  componentDidMount() {
    document.title = "Manflix | Search";
  }

  handleSubmit = e => {
    const { searchTerm } = this.state;
    e.preventDefault();
    if (searchTerm !== "") {
      this.setState({ beforTerm: searchTerm });
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      // throw Error();
      this.setState({ movieResults, tvResults, error: null });
    } catch {
      this.setState({ error: `Can't find ${searchTerm}.` });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };
  render() {
    const { movieResults, tvResults, searchTerm, loading, error, beforTerm } = this.state;
    return (
      <Search
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        beforTerm={beforTerm}
      />
    );
  }
}

export default SearchContainer;
