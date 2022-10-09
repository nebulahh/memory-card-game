import React from 'react'
import Scorecard from '../Scorecard/Scorecard'
import './Header.css'

function Header({score, high}) {
  
  const headerContainerColor = {
    height: '90px',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <header style={headerContainerColor}>
      <h1 style={{marginBottom: '20px'}}>Memory Game</h1>
   <Scorecard currentScore={score} highestScore={high}/>

    </header>
    
  )
}

export default Header