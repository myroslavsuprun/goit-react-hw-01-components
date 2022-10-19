import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ data }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles['stat-list']}>
        {data.map(
          ({ id, label, percentage }) =>
            label && (
              <li className={styles.item} key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
              </li>
            )
        )}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
