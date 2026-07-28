import * as styles from './MemberInfoCard.css';

interface MemberInfoCardProps {
  member: {
    loginId: string;
    name: string;
    email: string;
    age: number;
    part: string;
  } | null;

  variant?: 'search' | 'detail';
  emptyMessage?: string;
}

const MemberInfoCard = ({
  member,
  variant = 'search',
  emptyMessage = '원하는 ID를 검색해 보세요! 🔍',
}: MemberInfoCardProps) => {
  if (!member) {
    return (
      <div className={styles.resultCard}>
        <div className={styles.emptyResult}>{emptyMessage}</div>
      </div>
    );
  }

  return (
    <div className={styles.resultCard}>
      <div className={styles.resultRow}>
        <span className={styles.resultLabel}>
          {variant === 'detail' ? '이름' : '아이디'}
        </span>

        <span className={styles.resultValue}>
          {variant === 'detail' ? member.name : member.loginId}
        </span>
      </div>

      <div className={styles.resultRow}>
        <span className={styles.resultLabel}>
          {variant === 'detail' ? '아이디' : '이름'}
        </span>

        <span className={styles.resultValue}>
          {variant === 'detail' ? member.loginId : member.name}
        </span>
      </div>

      <div className={styles.resultRow}>
        <span className={styles.resultLabel}>이메일</span>
        <span className={styles.resultValue}>{member.email}</span>
      </div>

      <div className={styles.resultRow}>
        <span className={styles.resultLabel}>나이</span>
        <span className={styles.resultValue}>{member.age}</span>
      </div>

      <div className={styles.resultRow}>
        <span className={styles.resultLabel}>파트</span>
        <span className={styles.resultValue}>{member.part}</span>
      </div>
    </div>
  );
};

export default MemberInfoCard;
