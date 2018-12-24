import { observable, action } from 'mobx';
import Client from '../api';

const API = new Client();

type credentials = {
  email: string;
  password: string;
};

export interface Store {
  auth: null | {};
  onSignIn: ({ email, password }: credentials) => Promise<any>;
}

class MobxStore implements Store {
  @observable auth = null;

  @action.bound
  async onSignIn({ email, password }: credentials) {
    // const { data } = await API.client.post('/auth/signin', {
    //   email,
    //   password
    // });

    const data = await API.login({ email, password });

    console.log(data);
  }
}

export default MobxStore;
