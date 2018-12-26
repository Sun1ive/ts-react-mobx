import { createContext } from 'react';
import { configure, runInAction, observable, action, computed } from 'mobx';
import Client from '../api';

export const Context = createContext<{ store: Store } | {}>({});

const API = new Client();

type credentials = {
  email: string;
  password: string;
};

type auth = {
  accessToken: string;
  refreshToken: string;
  email: string;
  id: string;
};

configure({
  enforceActions: 'observed'
});

export interface Store {
  auth: auth | null;
  onSignIn: ({ email, password }: credentials) => Promise<any>;
}

class MobxStore implements Store {
  @observable auth = {
    accessToken: '',
    refreshToken: '',
    id: '',
    email: ''
  };

  @action
  onSignIn = async ({ email, password }: credentials) => {
    const data = await API.login({ email, password });

    runInAction(() => {
      this.auth = data;
    });
  };
}

export default MobxStore;
