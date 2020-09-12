import React from "react";
import ReactCaptchaGenerator from "react-captcha-generator";
import { useState } from "react";
import { Captcha } from "reactjs-captcha";
import styled from "styled-components";
import "./App.css";

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const [firstCapcha, setFirstCapcha] = useState("");
  const [secCapcha, setSecCapcha] = useState("");
  const [inputVal, setInputVal] = useState("");

  const result = (text) => {
    setFirstCapcha(text);
  };

  const check = () => {
    if (firstCapcha === inputVal) {
      alert("OK");
    } else {
      alert("NOT!!!");
    }
  };

  return (
    <>
      <div className="App">
        <ReactCaptchaGenerator result={result} />
        <Form onSubmit={check}>
          <input
            type="text"
            className={"myinput"}
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          />
          <input type="submit" />
        </Form>
      </div>
      <div>
        <Captcha
          captchaStyleName="yourFirstCaptchaStyle"
          ref={(captcha) => {
            setSecCapcha(captcha);
          }}
        />
        <input id="yourFirstCaptchaUserInput" type="text" />
      </div>
    </>
  );
}

export default App;
