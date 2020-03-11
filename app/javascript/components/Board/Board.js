import React from 'react'
import Letter from '../letter/letter';
import '../letter/letter.css';
import '../Board/board.css';

const Board = props => {debugger;
    const { board } = props;

  const letterStyle = board.split("").map((letter, idx) => {
    return <Letter letter={letter} key={idx} x={idx%4} y={Math.floor(idx/4)}/>
  })

  return (
     
    <div className="board-container">
    <div className="board">
      {letterStyle}
    </div>
  </div>
    
  )

};

export default Board
