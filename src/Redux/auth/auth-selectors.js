const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getRefreshingPage = (state) => state.auth.isRefreshingPage;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getRefreshingPage,
};

export default authSelectors;