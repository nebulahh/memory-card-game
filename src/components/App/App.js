import React, { useState } from "react";
import Header from "../Header/Header";
import Card from "../Cards/Card";

function App() {
  const [highScore, setHighScore] = useState(0)
   const [score , setScore] = useState(0)
  const [selectedCards, setSelectedCards] = useState([])

  const getCardName = (event) => {    
    if (selectedCards.includes(event)) {
      if (score > highScore) {
        setHighScore(score)   
      }
      setScore(0)
      setSelectedCards([])
    } else {
      setScore(score + 1)
      setSelectedCards(() => ([
        ...selectedCards, event
      ]))
    }
  }

  const pageColor = {
    backgroundColor: '#162c35',
    color: '#fff',
    height: '100vh',
  }

  return (
    <div style={pageColor}>
      <Header score={score} high={highScore}/>
      <Card fetch={getCardName} />
    </div>
  );
}

export default App;
