import { useRef, useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Message from "../components/Message";

const Greet = () => {
  const firstName = useRef("");
  const lastName = useRef("");
  const middleName = useRef("");
  const fullName = useRef("");
  const [state, setState] = useState("");

  const getFirstName = (e) => {
    firstName.current = e.target.value;
    setState(state + 1);
  };

  const getMiddleName = (e) => {
    middleName.current = e.target.value;
    setState(state + 1);
  };

  const getLastName = (e) => {
    lastName.current = e.target.value;
    setState(state + 1);
  };

  const checkButton = (e) => {
    if (e.target.innerText === "Greet") {
      getFullName();
      setState(state + 1);
    } else {
      firstName.current = "";
      lastName.current = "";
      middleName.current = "";
      fullName.current = "";
      setState(state + 1);
    }
  };

  const capitalize = (str) =>
    `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

  const getFullName = () => {
    if (firstName.current !== "") {
      fullName.current = `${capitalize(firstName.current)}`;
    }
    if (middleName.current !== "") {
      fullName.current += ` ${capitalize(middleName.current)}`;
    }
    if (lastName.current !== "") {
      fullName.current += ` ${capitalize(lastName.current)}`;
    }
  };

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      getFullName();
      setState(state + 1);
    }
  };

  return (
    <div className="body-wrapper">
      <Heading />
      <div className="input-wrapper">
        <Input
          label="First Name"
          getName={getFirstName}
          val={firstName.current}
          keyHandler={keyHandler}
        />
        <Input
          label="Middle Name"
          getName={getMiddleName}
          val={middleName.current}
          keyHandler={keyHandler}
        />
        <Input
          label="Last Name"
          getName={getLastName}
          val={lastName.current}
          keyHandler={keyHandler}
        />
      </div>
      <div className="button-wrapper">
        <Button label="Greet" handleEvent={checkButton} />
        <Button label="Clear" handleEvent={checkButton} />
      </div>
      <div className="screen">
        <Message fullName={fullName.current} />
      </div>
    </div>
  );
};

export default Greet;
