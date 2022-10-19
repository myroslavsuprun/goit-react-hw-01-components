import React from 'react';
import style from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendItem = ({ friends }) => {
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

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendItem;
