import React from 'react';
import style from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendsList}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendList;
