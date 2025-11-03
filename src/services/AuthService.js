const AuthService = {
  currentUser: null,

  login: (email, password) => {
    const user = {
      id: email === 'admin@penthara.com' ? 1 : 2,
      name: email === 'admin@penthara.com' ? 'Admin User' : 'Om Varshney',
      email: email,
      role: email === 'admin@penthara.com' ? 'admin' : 'employee',
      leaveBalance: {
        annual: 15,
        sick: 10,
        casual: 5
      }
    };
    AuthService.currentUser = user;
    return user;
  },

  logout: () => {
    AuthService.currentUser = null;
  }
};

export default AuthService;

