const useAuth = () => {
  const user = { loggedIn: false };
  console.log(`Logged in value is ${user.loggedIn}`);
  return user && user.loggedIn;
};

export default useAuth;
