import React from 'react';
import { useParams } from 'react-router-dom';

const StockDetails = () => {
  const { stockName } = useParams();

  return (
    <div>
      The stock name is
      { stockName }
    </div>
  );
};

export default StockDetails;
