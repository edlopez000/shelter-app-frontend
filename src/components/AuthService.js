class AuthService {
  login = () => {
    const user = { loggedIn: true }; // This needs to be set by the post request to the login endpoint
    return user && user.loggedIn;
  };
}

export default new AuthService();
