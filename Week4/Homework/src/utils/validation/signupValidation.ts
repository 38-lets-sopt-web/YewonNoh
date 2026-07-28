import { PART_OPTIONS } from '@constants/part';

export const validateLoginId = (loginId: string) => {
  if (loginId.length < 4 || loginId.length > 20) {
    return '아이디는 4자 이상 20자 이하로 입력해주세요.';
  }

  return null;
};

export const validatePassword = (password: string, passwordCheck: string) => {
  if (password.includes(' ')) {
    return '비밀번호에는 공백을 포함할 수 없습니다.';
  }

  if (password.length < 8 || password.length > 20) {
    return '비밀번호는 8자 이상 20자 이하로 입력해주세요.';
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])/;

  if (!passwordRegex.test(password)) {
    return '영어, 숫자, 특수문자를 각각 1자 이상 포함해주세요.';
  }

  if (password !== passwordCheck) {
    return '비밀번호가 일치하지 않습니다.';
  }

  return null;
};

export const validateProfile = (
  name: string,
  email: string,
  age: string,
  part: string,
) => {
  if (name && name.length > 10) {
    return '이름은 10자 이하로 입력해주세요.';
  }

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (email && !emailRegex.test(email)) {
    return '올바른 이메일 형식을 입력해주세요.';
  }

  const parsedAge = Number(age);

  if (age && (Number.isNaN(parsedAge) || parsedAge < 1 || parsedAge > 150)) {
    return '나이는 1세 이상 150세 이하로 입력해주세요.';
  }

  if (part && !PART_OPTIONS.includes(part)) {
    return '올바른 파트를 입력해주세요.';
  }

  return null;
};
