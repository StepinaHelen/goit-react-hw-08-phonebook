const getIsAuthenticated = state => state.autorization.token;
const getUserName = state => state.autorization.user.name;
export default {
    getIsAuthenticated,
    getUserName
}