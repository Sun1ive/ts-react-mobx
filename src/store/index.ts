import { observable, action } from 'mobx';

export interface Store {
  count: number;
  increment: () => void;
}

class MobxStore implements Store {
  @observable count = 0;

  @action.bound
  increment() {
    console.log('fired ?');
    this.count += 1;
    console.log(this.count);
  }
}

export default MobxStore;
