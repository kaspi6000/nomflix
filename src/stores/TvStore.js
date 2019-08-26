import { observable, action } from "mobx";

class TvStore {
  @observable tvList;

  @action
  handleTvList = () => {};
}
