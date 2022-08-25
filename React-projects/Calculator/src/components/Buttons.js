const Buttons = (props) => {
  return <button onClick = {props.handleEvent}>{props.num}</button>;
};

export default Buttons;
