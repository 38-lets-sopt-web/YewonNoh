import * as styles from './MemberCard.css';

interface MemberCardProps {
  name: string;
  part: string;
  onClick: () => void;
}

const MemberCard = ({ name, part, onClick }: MemberCardProps) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <span className={styles.name}>{name}</span>
      <span className={styles.badge}>{part}</span>
    </div>
  );
};

export default MemberCard;
