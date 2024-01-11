import React, { useState } from 'react';
import Calories from './Calories';
import '../App.css';

const Item= (props) => {
  const [count, setCount] = useState(0);
  const [totalCal, setTotalCal] = useState(0);

  const handleChange = (e) => {
    const newCount = e.target.value >= 0 ? e.target.value : 0;
    setCount(newCount);
  };

  const handleSubmit = () => {
    setTotalCal(props.food.cal * count);
  };

  const handleReset = () => {
    setCount(0);
    setTotalCal(0);
  };

  return (
    <div className='body'>
      <div className='div'>
        <div>
          <img src={props.food.img} alt=" " />
        </div>
        <div>
          <h3>{props.food.name}</h3>
          <h5>{props.food.cal}</h5>
        </div>
        <div>
          <input
            type="number"
            placeholder='Enter a number'
            value={count}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>+</button>
        </div>
      </div>
      <Calories name={props.food.name} totalCal={totalCal} count={count} />
      <button onClick={handleReset} className='resetbtn'>Reset</button>
    </div>
  );
};

export default Item;
