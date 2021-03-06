import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './StockDetails.module.scss';
import Spinner from '../../components/Spinner/Spinner';
import setApplicationState from '../../actions/applicationState';

const StockDetails = ({ applicationState, setApplicationState }) => {
  const { symbol } = useParams();
  const [details, setDetails] = useState({});
  const [error, setError] = useState('');

  const backgroundImageStyle = url => ({
    backgroundImage: `url(${url})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

  useEffect(() => {
    const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
    const requestString = `${REACT_APP_API_URL}/profile/${symbol}`;
    setApplicationState('FETCHING_DATA');
    axios.get(requestString, {
      params: {
        apikey: REACT_APP_API_KEY,
      },
    }).then(response => {
      setApplicationState('IDLE');
      if (response.data.length === 0) setError(`Could not retrieve data for symbol "${symbol}"`);
      else setDetails(response.data[0]);
    }).catch(e => {
      setError(e.message);
      setApplicationState('IDLE');
    });
  }, [symbol, setApplicationState]);

  const renderDetails = () => {
    if (applicationState === 'FETCHING_DATA') return <Spinner />;
    return (
      <div
        className={styles.stockDetailsBackgroundContainer}
        style={backgroundImageStyle(details.image)}
      >
        <div
          className={styles.stockDetailsContainer}
        >
          <div className={styles.stockDetailsItem}>
            <span className={styles.itemHeading}>Company Name</span>
            <span className={styles.itemValue}>{`${details.companyName}`}</span>
          </div>
          <div className={styles.stockDetailsItem}>
            <span className={styles.itemHeading}>Exchange</span>
            <span className={styles.itemValue}>{`${details.exchange}`}</span>
          </div>
          <div className={styles.stockDetailsItem}>
            <span className={styles.itemHeading}>Market cap</span>
            <span className={styles.itemValue}>{`${details.mktCap}`}</span>
          </div>
          <div className={styles.stockDetailsItem}>
            <span className={styles.itemHeading}>Stock price</span>
            <span className={styles.itemValue}>{`${details.price} ${details.currency}`}</span>
          </div>
          <div className={styles.stockDetailsItem}>
            <span className={styles.itemHeading}>Company Name</span>
            <span className={styles.itemValue}>{`${details.companyName}`}</span>
          </div>
          <Link className={styles.link} to="/">Back to index</Link>
        </div>
      </div>
    );
  };

  const renderError = () => (
    <div className={styles.error}>
      <p>
        <strong>Error! </strong>
        {`${error}`}
      </p>
    </div>
  );

  return <div>{error.length > 0 ? renderError() : renderDetails()}</div>;
};

StockDetails.propTypes = {
  applicationState: PropTypes.string.isRequired,
  setApplicationState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  applicationState: state.applicationState,
});

const mapDispatchToProps = dispatch => ({
  setApplicationState: appState => dispatch(setApplicationState(appState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockDetails);
