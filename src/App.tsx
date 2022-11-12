import './App.css';
import React, { useState } from 'react';
import AvatarGroup, { Size, UserProp } from './components/AvatarGroup';
import ToDo from './ToDo';
// fake data
import images from './assets/data.json';

function App() {
  const [userData] = useState<UserProp[]>(images);
  const [maxLength] = useState<number>(3);
  const [size] = useState<Size>('md');

  return (
    <div>
      <AvatarGroup
        data-testid="avatar-group"
        users={userData}
        maxLength={maxLength}
        size={size}
      />
      <ToDo />
    </div>
  );
}

export default App;
