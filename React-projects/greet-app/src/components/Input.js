const Input = (props) => {
  return (
    <>
      <label htmlFor={props.label}>{props.label} :</label>
      <input
        value={props.val}
        onChange={props.getName}
        onKeyDown = {props.keyHandler}
        type="text"
        id={props.label}
        placeholder="Type here"
      ></input>
    </>
  );
};

export default Input;
