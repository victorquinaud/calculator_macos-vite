import '../assets/css/Calculator.css';
import React, { useContext } from 'react';
import { CalculatorContext } from './../store/CalculatorProvider';

import Display from "../components/Display";
import Button from "../components/Button";

const Calculator = _ => {

  const { clearMemory, addDigit, setOperation, state } = useContext(CalculatorContext);

  return (
    <div className="Calculator">

      <Display value={state.displayValue} />

      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={setOperation} op />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={setOperation} op />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={setOperation} op />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={setOperation} op />
      <Button label="0" click={addDigit} double />
      <Button label="." click={addDigit} />
      <Button label="=" click={setOperation} op />

    </div>
  );
};

export default Calculator;