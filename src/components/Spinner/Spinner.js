import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.spinner}>
    <span className={styles.spinnerFirst} />
    <span className={styles.spinnerSecond} />
    <span className={styles.spinnerThird} />
  </div>
);

export default Spinner;
