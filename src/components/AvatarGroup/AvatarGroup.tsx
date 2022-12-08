import style from './AvatarGroup.module.scss';

export type Size = 'xs' | 'sm' | 'md' | 'lg';

export interface IUser {
  image: string;
  name: string;
}

interface IAvatarGroup {
  maxLength: number;
  size: Size;
  users: IUser[];
}

const getInitial = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0].toUpperCase())
    .join('')
    .substring(0, 2);
};

export default function AvatarGroup({ users, maxLength, size }: IAvatarGroup) {
  return (
    <div
      data-testid="avatar-container"
      className={`${style.avatarContainer} ${style[size]}`}
    >
      {users.slice(0, maxLength).map((user: IUser, idx: number) => (
        <div className={style.avatarImage} key={idx}>
          {user.image ? (
            <img src={user.image} alt={user.name} />
          ) : (
            <div className={style.avatarText}>{getInitial(user.name)}</div>
          )}
        </div>
      ))}
      {users.length - maxLength > 0 && (
        <div className={style.avatarImage}>
          <div className={style.overlimitCount}>
            +{users.length - maxLength}
          </div>
        </div>
      )}
    </div>
  );
}
