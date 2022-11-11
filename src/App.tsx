import './App.css';
import { useState } from 'react';
import AvatarGroup, { Size, UserProp } from './components/AvatarGroup';
// fake data
import images from './assets/data.json';

function App() {
  const [userData, setUserData] = useState<UserProp[]>(images);
  const [maxLength, setMaxLength] = useState<number>(3);
  const [size, setSize] = useState<Size>('md');

  return (
    <div>
      <AvatarGroup
        data-testid="avatar-group"
        users={userData}
        maxLength={maxLength}
        size={size}
      />
    </div>
  );
}

export default App;
