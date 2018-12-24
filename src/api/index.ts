import axios, { AxiosInstance } from 'axios';

interface IApi {
  client: AxiosInstance | null;
}

class Api implements IApi {
  public client = axios.create({
    baseURL: 'https://test-react-blog-api.herokuapp.com',
    withCredentials: false
  });

  public async login({ email, password }: { email: string; password: string }) {
    try {
      const {
        data: { data }
      } = await this.client.post('/api/auth/signin', {
        email,
        password
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default Api;
