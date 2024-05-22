import { useState } from 'react';

type ButtonProps = {
  style: {
    backgroundColor: string;
    color: string;
    fontSize: string;
  };
};

function Button({ style }: ButtonProps) {
  const [count, setCount] = useState(0);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCount(count + 1);
    console.log('Click me!');
  };

  return (
    <>
      <button onClick={handleClick} style={style}>
        Click me!
      </button>
      <p>Count: {count}</p>
    </>
  );
}

export default Button;
