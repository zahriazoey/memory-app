import React from 'react';

import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div className="App">
        <header className='App-header'>
          <h1>Memory Game</h1>
          <h4>Match Cards to Win</h4>
        </header>
      
      <div className='row'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      
      <div className='row'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
  
      <div className='row'> 
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
  
      <div className='row'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
          
    </div>
    );

}



export default App;
