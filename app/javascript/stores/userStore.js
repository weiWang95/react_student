import { observable, action } from 'mobx';

class UserStore {
  @observable logged = false;
  @observable user = null;

  @action login = (user) => {
    console.log('登录用户', user);
    this.user = user;
    this.logged = true;
  }

  @action logout = () => {
    this.user = null;
    this.logged = false;
  }
}

export default new UserStore();