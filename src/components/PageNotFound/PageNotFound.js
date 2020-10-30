import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  const location = useLocation();

  return (
    <div className={styles.pageContainer}>
      <h1>
        { `Page not found: ${location.pathname}` }
      </h1>
      <Link to="/">Return to index</Link>
    </div>
  );
};

export default PageNotFound;
