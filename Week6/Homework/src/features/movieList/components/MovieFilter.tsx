import * as styles from './MovieFilter.css';

import { FILTER_OPTIONS } from '../constants/filterOptions';

interface MovieFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const MovieFilter = ({ value, onChange }: MovieFilterProps) => {
  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {FILTER_OPTIONS.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieFilter;
