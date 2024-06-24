import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <p className={css.optionLabel}>
        Good: <span className={css.optionValue}>{good}</span>
      </p>
      <p className={css.optionLabel}>
        Neutral: <span className={css.optionValue}>{neutral}</span>
      </p>
      <p className={css.optionLabel}>
        Bad: <span className={css.optionValue}>{bad}</span>
      </p>
      <p className={css.optionLabel}>
        Total: <span className={css.optionValue}>{total}</span>
      </p>
      <p className={css.optionLabel}>
        Positive feedback:{' '}
        <span className={css.optionValue}>{positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
