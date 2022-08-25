import { useState } from "react";
import { Button } from "../components/Button";
import { Display } from "../components/Display";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleEvent = (e) => {
    if (e.target.textContent === "+") {
      setCount(count + 1);
    } else setCount(count - 1);
  };

  return (
    <div className="wrapper">
      <Button handleEvent={handleEvent} name="+" />
      <Display value={count} />
      <Button handleEvent={handleEvent} name="-" />
    </div>
  );
};
