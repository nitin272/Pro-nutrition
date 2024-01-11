import React from 'react';
import '../App.css';

const Calories = ({ name, count, totalCal }) => {
  return (
    <div>
      <h2>{`${count} ${name} = ${totalCal} calories`}</h2>
    </div>
  );
};

export default Calories;
