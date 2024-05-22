type ButtonProps = {
  style: {
    backgroundColor: string;
    color: string;
    fontSize: string;
  };
};

function Button({ style }: ButtonProps) {
  return <button style={style}>Click me!</button>;
}

export default Button;
