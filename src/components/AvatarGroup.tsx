import React, { useEffect, useState } from 'react';
import './AvatarGroup.scss';

export type Size = 'xs' | 'sm' | 'md' | 'lg';

export interface UserProp {
  image: string;
  name: string;
}

interface AvatarGroupProp {
  maxLength: number;
  size: Size;
  users: UserProp[];
}

export default function AvatarGroup({
  users,
  maxLength,
  size,
}: AvatarGroupProp) {
  const [overLimit, setOverLimit] = useState(users.length - maxLength);

  const OverLimit = ({ count }: { count: number }) => {
    return count > 0 ? (
      <div className="avatarImage">
        <div className="overlimitCount">+{count}</div>
      </div>
    ) : null;
  };

  const getInitial = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0].toUpperCase())
      .join('')
      .substring(0, 2);
  };

  useEffect(() => {
    if (users.length > maxLength) {
      // set over limit number for +{number}
      setOverLimit(users.length - maxLength);
    }
  }, [users, maxLength]);

  return (
    <div data-testid="avatar-container" className={'avatarContainer ' + size}>
      {users.slice(0, maxLength).map((user: UserProp, idx: number) => (
        <div className="avatarImage" key={idx}>
          {user.image ? (
            <img src={user.image} alt={user.name} />
          ) : (
            <div className="avatarText">{getInitial(user.name)}</div>
          )}
        </div>
      ))}
      <OverLimit count={overLimit} />
    </div>
  );
}
