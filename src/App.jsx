import React from 'react';
import './App.css';
import GameInformation from './component/GameInformation'; '../../Boulangerie//src/component/GameInformation'
import Counter from './container/Counter';
import { ContainerHeader } from './component/Header';
function App() {
  return (
    <div className="App">
      <ContainerHeader />

      <GameInformation />
      <Counter />
    </div>
  );
}

export default App;
