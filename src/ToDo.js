export default function ToDo() {
  const todoStyle = {
    border: '1px solid rgb(0 0 0)',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
  };

  return (
    <div style={todoStyle}>
      <strong>## AvatarGroup Component</strong>
      <ul>
        <li>Can set maximum of displayed total avatar.</li>
        <li>
          If data has no image then print the initial, eg: Pedro Tech shows as
          "PT" and max length of initial is 2.{' '}
        </li>
        <li>
          if data length is bigger than maximum, print +&#123;number&#125; for
          the avatar(s) that are not displayed.
        </li>
      </ul>

      <strong>## Unit Test Criteria</strong>
      <ul>
        <li>default component should render properly </li>
        <li>each props should be test as expected </li>
        <li>capture a component as snapshot file </li>
      </ul>

      <strong>## Expected Props</strong>
      <ul>
        <li>maxLength // maximum of component avatar to display </li>
        <li>size // size of avatar | expectation xs | sm | md | lg</li>
      </ul>
    </div>
  );
}
