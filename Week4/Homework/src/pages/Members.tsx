import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, MemberCard, MemberInfoCard } from '@components/index';
import * as styles from './Members.css';
import { getUser, getUserList } from '@services/member';
import type { MemberInfo, MemberListItem } from '@/types/member';

const Members = () => {
  const navigate = useNavigate();

  const [memberId, setMemberId] = useState('');
  const [members, setMembers] = useState<MemberListItem[]>([]);
  const [searchedMember, setSearchedMember] = useState<MemberInfo | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUserList();

        setMembers(response.data.users);
      } catch {
        alert('유저 목록을 불러오는데 실패했습니다.');
      }
    };

    fetchUsers();
  }, []);

  const isDisabled = !memberId.trim();

  const handleSearch = async () => {
    try {
      const response = await getUser(Number(memberId));

      setSearchedMember(response.data);
    } catch {
      setSearchedMember(null);

      alert('유저 정보를 불러오는데 실패했습니다.');
    }
  };

  const handleMoveDetail = (memberId: number) => {
    navigate(`/members/${memberId}`);
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

          <MemberInfoCard member={searchedMember} />
        </div>
      </section>

      <section className={styles.memberSection}>
        <h2 className={styles.memberTitle}>전체 멤버 리스트</h2>

        <div className={styles.memberGrid}>
          {members.map(member => (
            <MemberCard
              key={member.id}
              name={member.name}
              part={member.part}
              onClick={() => handleMoveDetail(member.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Members;
