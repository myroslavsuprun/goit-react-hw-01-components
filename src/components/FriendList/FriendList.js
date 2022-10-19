import React from 'react';
import style from './FriendList.module.css';
import FriendItem from './FriendItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendsList}>
      <FriendItem friends={friends} />
    </ul>
  );
};

export default FriendList;
