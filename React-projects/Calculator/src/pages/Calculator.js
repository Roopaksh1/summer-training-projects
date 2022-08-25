import Buttons from "../components/Buttons";
import DisplayScreen, { updateExpression } from "../components/DisplayScreen";
import Heading from "../components/Heading";
import { useState } from "react";

let value = '0';

export const Calculator = () => {
  const [state, setState] = useState(0);
  const setValue = (e) => {
    value = updateExpression(e, value);
    setState(state + 1);
  };

  return (
    <div>
      <Heading />
      <div className="calc-body">
        <DisplayScreen expression={value} />
        <div className="buttons-body">
          <Buttons num="1" handleEvent={setValue} />
          <Buttons num="2" handleEvent={setValue} />
          <Buttons num="3" handleEvent={setValue} />
          <Buttons num="+" handleEvent={setValue} />
          <Buttons num="4" handleEvent={setValue} />
          <Buttons num="5" handleEvent={setValue} />
          <Buttons num="6" handleEvent={setValue} />
          <Buttons num="-" handleEvent={setValue} />
          <Buttons num="7" handleEvent={setValue} />
          <Buttons num="8" handleEvent={setValue} />
          <Buttons num="9" handleEvent={setValue} />
          <Buttons num="*" handleEvent={setValue} />
          <Buttons num="C" handleEvent={setValue} />
          <Buttons num="0" handleEvent={setValue} />
          <Buttons num="=" handleEvent={setValue} />
          <Buttons num="/" handleEvent={setValue} />
        </div>
      </div>
    </div>
  );
};
