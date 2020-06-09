import React from 'react';

import MemoryCard from './components/MemoryCard';

import './App.css';

function App() {
  return (
    <div className="App">
        <header className='App-header'>
          <h1>Memory Game</h1>
          <h4>Match Cards to Win</h4>
        </header>
      
      <div className='row'>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
      </div>
      
      <div className='row'>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
      </div>
  
      <div className='row'> 
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
      </div>
  
      <div className='row'>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
      </div>
          
    </div>
    );

}



export default App;
