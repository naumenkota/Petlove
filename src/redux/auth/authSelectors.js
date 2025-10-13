const selectToken = (state) => state.auth.token;
const selectName = (state) => state.auth.user.name;
const selectEmail = (state) => state.auth.user.email;
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectIsRefreshing = (state) => state.auth.isRefreshing;

export default {
  selectToken,
  selectName,
  selectEmail,
  selectIsLoggedIn,
  selectIsRefreshing,
};
