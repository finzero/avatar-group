import React, { Fragment } from 'react';
import style from './GroupRadioButton.module.scss';

interface IRadioValue {
  label: string;
  value: string;
}

interface IGroupRadioButton {
  values: IRadioValue[];
  selectedValue: string;
  name: string;
  select: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GroupRadioButton({
  values,
  selectedValue,
  name,
  select,
}: IGroupRadioButton) {
  return (
    <div className={style.buttonGroup}>
      {values.map((v) => (
        <Fragment key={v.value}>
          <input
            type="radio"
            className={style.inputRadio}
            name={name}
            id={`radio${v.value}`}
            value={v.value}
            onChange={select}
          />
          <label
            htmlFor={`radio${v.value}`}
            className={`${style.labelRadio} ${
              v.value === selectedValue ? style.active : ''
            }`}
          >
            {v.label}
          </label>
        </Fragment>
      ))}
    </div>
  );
}
