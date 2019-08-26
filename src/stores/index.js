import MovieStore from "./MovieStore";
import TvStore from "./TvStore";

class RootStore {
  constructor() {
    this.movie = new MovieStore(this);
    this.tv = new TvStore(this);
  }
}

export default RootStore;
