import { ChangeEvent, useEffect, useState } from 'react';
import AvatarGroup, { Size } from './components/AvatarGroup/AvatarGroup';
import GroupRadioButton from './components/GroupRadioButton/GroupRadioButton';
import style from './App.module.scss';
// fake data
import users from './assets/data.json';

function App() {
  const [maxLength, setMaxLength] = useState<number>(3);
  const [size, setSize] = useState<Size>('md');
  const sizeValues = [
    {
      label: 'XS',
      value: 'xs',
    },
    {
      label: 'SM',
      value: 'sm',
    },
    {
      label: 'MD',
      value: 'md',
    },
    {
      label: 'LG',
      value: 'lg',
    },
  ];

  const handleMaxLengthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) {
      setMaxLength(Number(value));
    }
  };

  const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const size = e.target.value as Size;
    setSize(size);
  };

  return (
    <main>
      <form className={`${style.dFlex} ${style.itemCenter}`}>
        <div>
          <label htmlFor="maxlength">Set Max Display: </label>
          <input
            type="number"
            name="maxlength"
            id="maxlength"
            className={style.formInput}
            min={1}
            placeholder="Set Max Length"
            defaultValue={maxLength}
            onChange={handleMaxLengthChange}
          />
        </div>

        <div className={style.ml1}>
          <GroupRadioButton
            selectedValue={size}
            values={sizeValues}
            name={'sizeRadio'}
            select={handleSizeChange}
          />
        </div>
      </form>
      <hr />

      <main>
        <AvatarGroup
          data-testid="avatar-group"
          users={users}
          maxLength={maxLength}
          size={size}
        />
      </main>
    </main>
  );
}

export default App;
