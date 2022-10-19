import React from 'react';
import TransactionHistoryRow from './TransactionHistoryRow';
import style from './TransactionHistory.module.css';

const TransactionHistoryTable = ({ transactions }) => {
  return (
    <table className={style['table']}>
      <thead>
        <tr className={style['table-header']}>
          <th className={style['table-data']}>Type</th>
          <th className={style['table-data']}>Amount</th>
          <th className={style['table-data']}>Currency</th>
        </tr>
      </thead>

      <tbody className={style['table-body']}>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionHistoryRow
            id={id}
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistoryTable;
