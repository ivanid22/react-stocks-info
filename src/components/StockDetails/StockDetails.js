import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './StockDetails.module.scss';
import Spinner from '../Spinner/Spinner';
import setApplicationState from '../../actions/applicationState'

const StockDetails = ({ applicationState, setApplicationState }) => {
  const { symbol } = useParams();
  const [details, setDetails] = useState({});
  const [error, setError] = useState('');

  const backgroundImageStyle = url => ({
    backgroundImage: `url(${url})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

  const fetchData = async () => {
    const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
    const requestString = `${REACT_APP_API_URL}/profile/${symbol}`;
    const result = await axios.get(requestString, {
      params: {
        apikey: REACT_APP_API_KEY,
      },
    });
    setApplicationState('IDLE');
    if (result.data.length === 0) setError(`Could not retrieve data for symbol "${symbol}"`);
    else setDetails(result.data[0]);
  };

  useEffect(() => {
    setApplicationState('FETCHING_DATA');
    fetchData();
    setDetails(details);
  }, [symbol]);

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
