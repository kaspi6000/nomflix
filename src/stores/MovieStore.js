import { observable, action } from "mobx";
import axios from "axios";

class MovieStore {
  @observable nowPlaying = [];
  @observable upComing = [];
  @observable popular = [];
  @observable detail = {};
  @observable search = [];

  params = {
    method: "GET",
    baseURL: process.env.REACT_APP_API_URL,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: "ko"
    },
    timeout: 6000
  };

  @action
  handleNowPlaying = () => {
    return axios({ ...this.params, url: "/movie/now_playing" })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  handleUpComing = () => {
    return axios({ ...this.params, url: "/movie/upcoming" })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  handlePopular = () => {
    return axios({ ...this.params, url: "/movie/popular" })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  handleDetail = id => {
    return axios({
      ...this.params,
      url: `/movie/${id}`,
      params: { ...this.params.params, append_to_response: "videos" }
    })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  handleSearch = term => {
    return axios({
      ...this.params,
      url: "/search/movie",
      params: { ...this.params.params, query: term }
    })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  movieApi = {
    nowPlaying: () =>
      axios({ ...this.params, url: "/movie/now_playing" }).then(
        data => (this.nowPlaying = data.data)
      ),
    upComing: () =>
      axios({ ...this.params, url: "/movie/upcoming" }).then(
        data => (this.upComing = data.data)
      ),
    popular: () =>
      axios({ ...this.params, url: "/movie/popular" }).then(
        data => (this.popular = data.data)
      ),
    movieDetail: id =>
      axios({
        ...this.params,
        url: `/movie/${id}`,
        params: { ...this.params.params, append_to_response: "videos" }
      }).then(data => (this.detail = data.data)),
    search: term =>
      axios({
        ...this.params,
        url: "/search/movie",
        params: { ...this.params.params, query: term }
      }).then(data => (this.search = data.data))
  };
}

export default MovieStore;
