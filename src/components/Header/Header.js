import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  const renderHeader = () => (
    <div className={styles.headerContainer}>
      <button type="button" className="headerButton">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
      <button type="button" className="headerButton" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faSearch} size="lg" />
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
