import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

const params = {
  method: "GET",
  baseURL: REACT_APP_API_URL,
  params: {
    api_key: REACT_APP_API_KEY,
    language: "ko"
  }
};

export const movieApi = {
  nowPlaying: () => axios({ ...params, url: "/movie/now_playing" }),
  upComing: () => axios({ ...params, url: "/movie/upcoming" }),
  popular: () => axios({ ...params, url: "/movie/popular" }),
  movieDetail: id =>
    axios({
      ...params,
      url: `/movie/${id}`,
      params: { ...params.params, append_to_response: "videos" }
    }),
  search: term =>
    axios({
      ...params,
      url: "/search/movie",
      params: { ...params.params, query: encodeURIComponent(term) }
    })
};

export const tvApi = {
  topRated: () => axios({ ...params, url: "/tv/top_rated" }),
  popular: () => axios({ ...params, url: "/tv/popular" }),
  airingToday: () => axios({ ...params, url: "/tv/airing_today" }),
  showDetail: id =>
    axios({
      ...params,
      url: `/tv/${id}`,
      params: { ...params.params, append_to_response: "videos" }
    }),
  search: term =>
    axios({
      ...params,
      url: "/search/tv",
      params: { ...params.params, query: encodeURIComponent(term) }
    })
};
