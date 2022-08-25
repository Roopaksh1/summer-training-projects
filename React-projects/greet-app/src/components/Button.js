const Button = (props) => {
  return <button onClick={props.handleEvent}>{props.label}</button>;
};

export default Button;
