export const validateEmail = (email: string) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailRegex.test(email)) {
    return '올바른 이메일 형식을 입력해주세요.';
  }

  return null;
};
