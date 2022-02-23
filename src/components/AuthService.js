import axios from 'axios';

class AuthService {
  login = (data) => {
    let res = axios.post(
      '/api/auth/signin',
      {
        username: data.username,
        password: data.password,
      },
      { headers: { 'X-Requested-With': 'XMLHttpRequest' } } // this is bad practice and needs to handled in the backend
    );
    return res.then((res) => res);
  };
}

export default new AuthService();
