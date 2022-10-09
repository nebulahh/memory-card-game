import React, { useState } from 'react'
import './Card.css'
import cards from '../Data/data'
// import Scorecard from '../Scorecard/Scorecard'

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array
}

function Card({fetch}) {
  const [arbitaryNum, setArbitaryNum] = useState(1)

  const getNameOfCard = (event) => {
    fetch(event.target.parentNode.nextSibling.textContent)
    setArbitaryNum(arbitaryNum+1)
    shuffle(cards)
  }


  const flex = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyContent: 'center',
    gap: '20px',
    width: '70%',
    margin: '0 auto',
    marginTop: '5.7rem',
  }

  const flexItem = {
    width: '70px',
    cursor: 'pointer',
    justifySelf: 'center',
    alignSelf: 'center'
  }

  return (
    <div style={flex}>
      {cards.map((food) => {
        return (
          <div  key={food.id} style={flexItem}>
            <div onClick={(e) => getNameOfCard(e)} className='imgContainer'>
              <img className='maxWidth' src={food.pictureDir} alt="img"/>
            </div>

            <p className='center'>{food.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Card