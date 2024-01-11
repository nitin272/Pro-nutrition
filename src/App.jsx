import React, { useState } from 'react';
import Item from './components/Item';
import Data from './Data/Data';
import Search from './components/search';
import './App.css';

const App = () => {
  const [searched, setSearch] = useState('');
  const [totalCost, setTotalCost] = useState(0);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = Data.filter((item) =>
    searched === '' ? true : item.name.toLowerCase().includes(searched.toLowerCase())
  );

  const renderBoxes = () => {
    return filteredData.map((food) => (
      <div key={food.id}>
        <Item food={food} totalCost={totalCost} />
      </div>
    ));
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      {renderBoxes()}
    </div>
  );
};

export default App;
