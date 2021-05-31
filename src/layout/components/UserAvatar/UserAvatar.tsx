import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar} from 'antd';
import {PopoverStyle} from '../../styles';

const UserAvatar = () => {
  const SignOut = (e: Record<string, any>) => {
    e.preventDefault();
  };

  const userContent = <div>
    Hello user
  </div>

  return (
    <PopoverStyle placement="bottomRight" content={userContent} trigger="click">
      <Link to="#" className="head-example">
        <Avatar  icon={<i className="ri-user-6-fill" />}/>
      </Link>
    </PopoverStyle>
  );
};

export default UserAvatar;
