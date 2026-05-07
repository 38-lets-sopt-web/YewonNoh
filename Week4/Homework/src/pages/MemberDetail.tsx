import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { MemberInfoCard } from '@components/index';
import * as styles from './MemberDetail.css';

const DUMMY_MEMBERS = [
  {
    id: 1,
    loginId: 'test1',
    name: 'test1',
    email: 'sopt@sopt.org',
    age: 20,
    part: '웹',
  },
];

const MemberDetail = () => {
  const navigate = useNavigate();

  const { memberId } = useParams();

  const member = DUMMY_MEMBERS.find(member => member.id === Number(memberId));

  if (!member) {
    return null;
  }

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
