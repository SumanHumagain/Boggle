import React from 'react'
import WordForm from "../inputWord/WordForm";


const InputWord = (props) => {

  return(
    <div className="footer-container">
      <WordForm handleWord={props.handleWord} letters={props.board}/>
      {/* <Score score={props.score}/> */}
    </div>
  )
}

export default InputWord;
