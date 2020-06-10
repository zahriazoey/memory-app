import React, { Component } from 'react';
import MemoryCard from './components/MemoryCard';
import './App.css';

function generateDeck() {
  // let symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let symbols = ['💀', '👓', '🧩', '🧬', '🆒', '〰️', '☯︎', '🥑'];

  let deck = [];

  for (let i = 0; i < 16; i++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[i%8]
    })

  } 
  return shuffle(deck);

}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}




class App extends Component {
  constructor() {
    super()

    this.state = { 
      deck: generateDeck(), 
      pickedCards: []
  }
}

pickCard = (cardIndex) => {
  console.log('clicked', cardIndex)
  if (this.state.deck[cardIndex].isFlipped) {
    return; 
  }
  let cardToFlip = {...this.state.deck[cardIndex]};
  cardToFlip.isFlipped = true;

  let newPickedCards = this.state.pickedCards.concat(cardIndex);
  let newDeck = this.state.deck.map((card, index) => {
    if (cardIndex === index) {
      return cardToFlip;
    }
    return card;
  });

    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];

      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(() => {this.unflipCards(card1Index,card2Index)}, 1000);

      }
      newPickedCards = [];
    }
    this.setState({ deck: newDeck, pickedCards: newPickedCards })
  
}

  unflipCards = (card1Index, card2Index) => {
    let card1 = {...this.state.deck[card1Index]}
    let card2 = {...this.state.deck[card2Index]}
    card1.isFlipped = false;
    card2.isFlipped = false; 

    let newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      } else if (card2Index === index) {
        return card2
      }
      return card; 

    });

    this.setState({ deck: newDeck });

}




  render() {
    let cardJSX = [];
    cardJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={ card.symbol } isFlipped={ card.isFlipped } key={ index } pickCard={() => {this.pickCard(index)} } />
    })

    return (
    <div className="App">
      <header className='App-header'>
        <h1>Memory Game</h1>
        <h4>Match Cards to Win</h4>
      </header>

      <div className='row'>
        { cardJSX.slice(0,4) }
      </div>
    
    <div className='row'>
      { cardJSX.slice(4,8) }
    </div>

    <div className='row'> 
      { cardJSX.slice(8,12) } 
    </div>

    <div className='row'>
      { cardJSX.slice(12,16) }
    </div>
  </div>  

    )
  }

}






export default App;
