import React from 'react';
import style from './FriendList.module.css';
import FriendItem from './FriendItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
      ))}
    </ul>
  );
};

export default FriendList;
