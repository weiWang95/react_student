import { observable, action } from "mobx";

class globalStore {
  @observable title = 'Winse';

  @observable loading = false;
  @observable showLoginModal = false;

  @action changeLoadingState = (arr) => {
    this.loading = arr != undefined && arr.length > 0;
  }
}

export default new globalStore();