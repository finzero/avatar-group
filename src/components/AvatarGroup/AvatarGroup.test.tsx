import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import AvatarGroup from './AvatarGroup';
import renderer from 'react-test-renderer';

const userData = [
  { name: 'Garnet till Alexandros', image: '' },
  { name: 'edison alexander thomas', image: './cat-6.jpg' },
  { name: 'thomas alfa', image: './cat-7.jpg' },
  { name: 'zidane tribal', image: './cat-5.jpg' },
];

describe(AvatarGroup, () => {
  it('should have class md if size = md', () => {
    const maxLength = 2;
    const { getByTestId } = render(
      <AvatarGroup users={userData} size="md" maxLength={maxLength} />
    );
    const container = getByTestId('avatar-container');
    expect(container.classList.contains('md')).toBe(true);
  });

  it('should render 2 avatar and +2 more avatar if total user is 4 and maxLength is 2', () => {
    const maxLength = 2;
    const { getByTestId } = render(
      <AvatarGroup users={userData} size="lg" maxLength={maxLength} />
    );

    const container = getByTestId('avatar-container');
    const totalImageRendered =
      container.querySelectorAll('.avatarImage').length;
    expect(totalImageRendered).toEqual(3);
  });

  it('should render name initial if there is no image', () => {
    const maxLength = 3;
    const { getByTestId } = render(
      <AvatarGroup users={userData} size="md" maxLength={maxLength} />
    );
    const container = getByTestId('avatar-container');
    const userInitial = 'GT'; //  { name: 'Garnet till Alexandros', image: '' }
    expect(within(container).queryByText(userInitial)).toBeTruthy();
  });

  it('should render all avatar if total avatar <= maxLength', () => {
    const maxLength = 4;
    const { getByTestId } = render(
      <AvatarGroup users={userData} size="md" maxLength={maxLength} />
    );
    const container = getByTestId('avatar-container');
    const totalImageRendered =
      container.querySelectorAll('.avatarImage').length;
    expect(totalImageRendered).toEqual(4);
  });

  it('should contain + mark if total avatar > maxLength', () => {
    const maxLength = 2;
    const { getByTestId } = render(
      <AvatarGroup users={userData} size="md" maxLength={maxLength} />
    );
    const container = getByTestId('avatar-container');
    const overlimitCount = container.querySelector(
      '.avatarImage .overlimitCount'
    )?.textContent;
    expect(overlimitCount).toContain('+');
  });

  it('should render correctly', () => {
    const maxLength = 2;
    const tree = renderer
      .create(<AvatarGroup users={userData} size="sm" maxLength={maxLength} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
