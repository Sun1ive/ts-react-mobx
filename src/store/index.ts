import { observable, action } from 'mobx';

export interface Store {
  count: number;
  increment: () => void;
}

export default class {
  @observable count = 0;

  @action.bound
  increment() {
    console.log('fired ?');
    this.count += 1;
    console.log(this.count);
  }
}
