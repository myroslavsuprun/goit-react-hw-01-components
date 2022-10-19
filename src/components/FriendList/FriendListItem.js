import React from 'react';
import style from './FriendList.module.css';

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={style.item} key={id}>
          {isOnline ? (
            <span className={style['status--online']}></span>
          ) : (
            <span className={style['status--offline']}></span>
          )}
          <img className={style.avatar} src={avatar} alt={name} width="48" />
          <p className={style.name}>{name}</p>
        </li>
      ))}
    </>
  );
};

export default FriendListItem;
