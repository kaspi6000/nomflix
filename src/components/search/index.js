import React from "react";
import Search from "./Search";
import { movieApi, tvApi } from "../../utils";

class SearchContainer extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResults }
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      this.setState({ loading: true, movieResults, tvResults });
    } catch {
      this.setState({ error: `Can't find ${searchTerm}.` });
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    console.log(this.state);
    return <Search movieResults={movieResults} tvResults={tvResults} searchTerm={searchTerm} loading={loading} error={error} handleSubmit={this.handleSubmit} />;
  }
}

export default SearchContainer;
