import React from 'react'

const Scorecard = ({currentScore, highestScore}) => {

  return (
    <div>
      Current Score: {currentScore} 
      Highest Score: {highestScore}
    </div>
  )
}

export default Scorecard