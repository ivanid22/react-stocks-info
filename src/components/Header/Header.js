import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../containers/SearchBar/SearchBar';
import styles from './Header.module.scss';

const Header = () => {
  const [open, setOpen] = useState(false);

  const renderHeader = () => (
    <div className={styles.headerContainer}>
      <button type="button" className={styles.headerButton}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
      <span className={styles.headerTitle}> StocksInfo </span>
      <button type="button" className={styles.headerButton} onClick={() => setOpen(true)}>
        <FontAwesomeIcon role="search" icon={faSearch} size="lg" />
      </button>
    </div>
  );

  return (
    <div>
      { open ? <SearchBar hideSearchBar={() => setOpen(false)} /> : renderHeader() }
    </div>
  );
};

export default Header;
