import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StockDetails = () => {
  const { symbol } = useParams();
  const [details, setDetails] = useState({});

  const fetchData = async () => {
    const requestString = `${process.env.REACT_APP_API_URL}/profile/${symbol}`;
    const result = await axios.get(requestString, {
      params: {
        apikey: process.env.REACT_APP_API_KEY,
      },
    });
    setDetails(result.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, [symbol]);

  return (
    <div>
      The stock name is
      { `${details.exchange}/${details.companyName}` }
    </div>
  );
};

export default StockDetails;
