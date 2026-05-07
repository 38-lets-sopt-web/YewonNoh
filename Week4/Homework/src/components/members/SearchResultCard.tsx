import * as styles from './SearchResultCard.css';

interface SearchResultCardProps {
  member: {
    loginId: string;
    name: string;
    email: string;
    age: number;
    part: string;
  } | null;
}

const SearchResultCard = ({ member }: SearchResultCardProps) => {
  return (
    <div className={styles.resultCard}>
      {member ? (
        <>
          <div className={styles.resultRow}>
            <span className={styles.resultLabel}>아이디</span>
            <span className={styles.resultValue}>{member.loginId}</span>
          </div>

          <div className={styles.resultRow}>
            <span className={styles.resultLabel}>이름</span>
            <span className={styles.resultValue}>{member.name}</span>
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
        </>
      ) : (
        <div className={styles.emptyResult}>원하는 ID를 검색해 보세요! 🔍</div>
      )}
    </div>
  );
};

export default SearchResultCard;
