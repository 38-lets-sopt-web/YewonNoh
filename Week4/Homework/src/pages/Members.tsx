import { useState } from 'react';
import { Input, Button, MemberCard, SearchResultCard } from '@components/index';
import * as styles from './Members.css';

const DUMMY_MEMBERS = [
  {
    id: 1,
    loginId: 'test1',
    name: 'test1',
    email: 'sopt@sopt.org',
    age: 20,
    part: '웹',
  },
  {
    id: 2,
    loginId: 'test2',
    name: 'test2',
    email: 'sopt@sopt.org',
    age: 21,
    part: 'iOS',
  },
  {
    id: 3,
    loginId: 'test3',
    name: 'test3',
    email: 'sopt@sopt.org',
    age: 22,
    part: '안드로이드',
  },
  {
    id: 4,
    loginId: 'test4',
    name: 'test4',
    email: 'sopt@sopt.org',
    age: 23,
    part: '서버',
  },
  {
    id: 5,
    loginId: 'test5',
    name: 'test5',
    email: 'sopt@sopt.org',
    age: 24,
    part: '기획',
  },
  {
    id: 6,
    loginId: 'test6',
    name: 'test6',
    email: 'sopt@sopt.org',
    age: 25,
    part: '디자인',
  },
];

const Members = () => {
  const [memberId, setMemberId] = useState('');

  const [searchedMember, setSearchedMember] = useState<
    (typeof DUMMY_MEMBERS)[number] | null
  >(null);

  const isDisabled = !memberId.trim();

  const handleSearch = () => {
    const foundMember =
      DUMMY_MEMBERS.find(member => member.id === Number(memberId)) ?? null;

    setSearchedMember(foundMember);
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.searchSection}>
        <h1 className={styles.title}>회원 조회</h1>

        <div className={styles.searchGroup}>
          <Input
            label="회원 ID"
            type="number"
            placeholder="ID를 입력하세요"
            value={memberId}
            onChange={e => setMemberId(e.target.value)}
          />

          <Button disabled={isDisabled} onClick={handleSearch}>
            검색
          </Button>
        </div>

        <div className={styles.resultWrapper}>
          <h2 className={styles.resultTitle}>검색 결과</h2>

          <SearchResultCard member={searchedMember} />
        </div>
      </section>

      <section className={styles.memberSection}>
        <h2 className={styles.memberTitle}>전체 멤버 리스트</h2>

        <div className={styles.memberGrid}>
          {DUMMY_MEMBERS.map(member => (
            <MemberCard
              key={member.id}
              name={member.name}
              part={member.part}
              onClick={() => {}}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Members;
