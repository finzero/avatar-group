import React, { useEffect, useState } from 'react';
import './AvatarGroup.scss';

type Size = 'xs' | 'sm' | 'md' | 'lg';

export interface UserProp {
  image: string;
  name: string;
}

export interface AvatarGroupProp {
  maxLength: number;
  size: Size;
  users: UserProp[];
}

export default function AvatarGroup({
  users,
  maxLength,
  size,
}: AvatarGroupProp) {
  const [displayUsers, setDisplayUsers] = useState(users);
  const [overLimit, setOverLimit] = useState(0);

  const getInitials = (name: string) => {
    const initial = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2);
    return initial;
  };

  useEffect(() => {
    if (displayUsers.length > maxLength) {
      setOverLimit(displayUsers.length - maxLength);
      const newDisplay = displayUsers.slice(0, maxLength);
      console.log(displayUsers, newDisplay);
      setDisplayUsers(newDisplay);
    }
  }, []);

  return (
    <div className={'avatarContainer ' + size}>
      {displayUsers.map((user: UserProp, idx: number) => (
        <div className="avatarImage" key={idx}>
          {user.image ? (
            <img src={user.image} alt={user.name} />
          ) : (
            <div className="avatarText">{getInitials(user.name)}</div>
          )}
        </div>
      ))}
      {overLimit && (
        <div className="avatarImage">
          <div className="avatarText">+{overLimit}</div>
        </div>
      )}
    </div>
  );
}
