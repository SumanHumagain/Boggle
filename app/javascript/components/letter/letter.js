
import React from 'react'

const Letter = props => {
      const { x, y, letter } = props;

  return <div className="letter" x={x} y={y} >{letter}</div>

}

export default Letter;