export const useAuth = () => {
  const userId = localStorage.getItem('userId');

  return {
    isLogin: !!userId,
  };
};
