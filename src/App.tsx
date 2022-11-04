import './App.css';
import AvatarGroup, { UserProp } from './components/AvatarGroup';

const users: UserProp[] = [
  {
    name: 'Fazrin Mutaqin Thea',
    image: '',
  },
  {
    name: 'Ismail Marzuki',
    image:
      'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/04/16/kucing-paling-setia-jpg-20220416022414.jpg',
  },
  {
    name: 'Munawarman',
    image:
      'https://www.greeners.co/wp-content/uploads/2021/03/Kucing-Domestik-1.jpg',
  },
  {
    name: 'Thomas Edison',
    image:
      'https://www.ruparupa.com/blog/wp-content/uploads/2021/02/Screen-Shot-2021-02-05-at-11.53.27-1024x622.png',
  },
];

function App() {
  return (
    <div>
      <AvatarGroup users={users} maxLength={3} size={'xs'} />
    </div>
  );
}

export default App;
