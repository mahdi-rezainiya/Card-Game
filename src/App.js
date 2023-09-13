import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './component/SingleCard.js';


const cardImages = [
  { "src": "/img/helmet-1.png" , matched : false},
  { "src": "/img/potion-1.png" , matched : false},
  { "src": "/img/ring-1.png" , matched : false},
  { "src": "/img/scroll-1.png" , matched : false},
  { "src": "/img/shield-1.png" , matched : false},
  { "src": "/img/sword-1.png" , matched : false}
]

function App() {

  const [cards , setCards] = useState([]);
  const [turns , setTurns] = useState(0);
  const [choiceOne , setChoiceOne] = useState(null);
  const [choiceTwo , setChoiceTwo] = useState(null);
  const [disabled , setDisabled] = useState(false);
  
  const shuffleCards = () =>{
    const shuffleCards = [...cardImages , ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card , id : Math.random()}))

    setChoiceOne(null)
    setChoiceTwo(null)

    // console.log(shuffleCards);

    setCards(shuffleCards);
    setTurns(0)
  }

  // console.log(cards , turns);

  // handle a choice

  const handleChoice = (card) => {
    // console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 1 and 2
  useEffect(() => {
    if(choiceOne && choiceTwo ){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src){
        // console.log("match");
        setCards(prevCard => {
          return prevCard.map(card => {
            if(card.src === choiceOne.src){
              return {...card , matched : true}
            }
            else{
              return card
            }
          })
        })
        resetTurn()
      }
      else{
        // console.log("not match");
        // resetTurn()
        setTimeout(() => resetTurn() , 1000)
      }
    }
  },
  [choiceOne , choiceTwo])
  
// reset choice and increase turn

console.log(cards);
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurn => prevTurn +1)
  setDisabled(false)
}

useEffect(()=> {
  shuffleCards()
} 
, [])


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        
        {cards.map(card => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} disabled = {disabled} />
        ))}
  
      </div>
      <p>turns : {turns}</p>
    </div>
  );
}

export default App;
