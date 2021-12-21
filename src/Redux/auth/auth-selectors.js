const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getRefreshingPage = (state) => state.auth.isRefreshingPage;
const getError = (state) => state.auth.error;
const getPending = (state) => state.auth.isPending

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getRefreshingPage,
  getError,
  getPending,
};

export default authSelectors;