import React from 'react';
import Introduction from './Introduction';
import Installation from './Installation';
import BuildingPage from './BuildingPage';
import Difficulties from './Difficulties';
import Solutions from './Solutions';

const App = () => {
  return (
    <div>
      <Introduction />
      <Installation />
      <BuildingPage />
      <Difficulties />
      <Solutions />
    </div>
  );
};

export default App;