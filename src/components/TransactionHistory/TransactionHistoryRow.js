import React from 'react';
import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

const TransactionHistoryRow = ({ id, type, amount, currency }) => {
  return (
    <tr className={style['table-row']} key={id}>
      <td className={style['table-data']}>{type}</td>
      <td className={style['table-data']}>{amount}</td>
      <td className={style['table-data']}>{currency}</td>
    </tr>
  );
};

TransactionHistoryRow.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit']),
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistoryRow;
