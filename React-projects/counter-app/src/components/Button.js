export const Button = ({ name, handleEvent }) => {
  return <button onClick={handleEvent}>{name}</button>;
};
