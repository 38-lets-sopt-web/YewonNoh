import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { MemberInfoCard } from '@components/index';
import * as styles from './MemberDetail.css';
import { getUser } from '@services/member';
import type { MemberInfo } from '@/types/member';

const MemberDetail = () => {
  const navigate = useNavigate();

  const { memberId } = useParams();

  const [member, setMember] = useState<MemberInfo | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!memberId) {
          return;
        }

        const response = await getUser(Number(memberId));

        setMember(response.data);
      } catch {
        alert('회원 정보를 불러오는데 실패했습니다.');
      }
    };

    fetchUser();
  }, [memberId]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>상세 정보</h1>

      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <IoArrowBack size={20} />
        뒤로가기
      </button>

      <MemberInfoCard
        member={member}
        variant="detail"
        emptyMessage="회원 정보가 없습니다."
      />
    </div>
  );
};

export default MemberDetail;
