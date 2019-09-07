import { observable} from "mobx";

class axiosStore {
  @observable requestCount = 0;
}

export default new axiosStore();