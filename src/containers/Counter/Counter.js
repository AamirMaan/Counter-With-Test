import React from 'react';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

import './Counter.css';

function Counter() {
  const [counter, setCounter] = React.useState(0);
  const [inputValue, setInputValue] = React.useState(1);

  const handleOnChange = event => {
    setInputValue(Number(event.target.value));
  };

  const handleIncrement = () => {
    setCounter(prevState => prevState + inputValue);
  };

  const handleDecrement = () => {
    setCounter(prevState => prevState - inputValue);
  };

  return (
    <div>
      <h3>My Counter</h3>
      <h2
        className={`${counter >= 100 ? 'green' : ''}${
          counter <= -100 ? 'red' : ''
        }`}
      >
        {counter}
      </h2>
      <Button onClick={handleDecrement} title={'-'} />
      <TextField
        type='number'
        name='counter'
        onChange={handleOnChange}
        value={inputValue}
      />
      <Button onClick={handleIncrement} title={'+'} />
    </div>
  );
}

export default Counter;
