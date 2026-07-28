export interface MemberInfo {
  id: number;
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

export interface MemberListItem {
  id: number;
  name: string;
  part: string;
}

export interface UpdateMemberRequest {
  name: string;
  email: string;
  age: number;
}
