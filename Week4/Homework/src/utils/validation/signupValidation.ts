interface SignupForm {
  loginId: string;
  password: string;
  passwordCheck: string;
  name: string;
  email: string;
  age: string;
  part: string;
}

const PART_OPTIONS = ['웹', 'iOS', '안드로이드', '기획', '서버'];

export const validateSignupForm = (form: SignupForm) => {
  if (form.loginId.length < 4 || form.loginId.length > 20) {
    return '아이디는 4자 이상 20자 이하로 입력해주세요.';
  }

  if (form.password.length < 8 || form.password.length > 20) {
    return '비밀번호는 8자 이상 20자 이하로 입력해주세요.';
  }

  if (form.name.length > 10) {
    return '이름은 10자 이하로 입력해주세요.';
  }

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailRegex.test(form.email)) {
    return '올바른 이메일 형식을 입력해주세요.';
  }

  const age = Number(form.age);

  if (Number.isNaN(age) || age < 1 || age > 150) {
    return '나이는 1세 이상 150세 이하로 입력해주세요.';
  }

  if (!PART_OPTIONS.includes(form.part)) {
    return '올바른 파트를 입력해주세요.';
  }

  if (form.password !== form.passwordCheck) {
    return '비밀번호가 일치하지 않습니다.';
  }

  return null;
};
