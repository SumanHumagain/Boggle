import React from 'react'

const WordList = props=> {
  
    const { wordsAll, trials, wrongCount } = props;
    
     let words = [];
     let scores = [];
     // if(wordsAll !=null || wordsAll != undefined)
      words = Object.keys(wordsAll);
      scores= Object.values(wordsAll);

  const showWord = () => { debugger;
    return words.map((word, idx) => {
      return <li key={idx} className="word-list-items">{word}</li>
    })
  }

  const showScore = () => { debugger;
    return scores.map((score, idx) => {
      return <li key={idx} className="word-list-items">{score}</li>
    })
  }
  let totalScore = 0;
  totalScore = Object.values(wordsAll).reduce(
    (totalScore, next) => {
      return totalScore + next;
    },
    0
  )

  return (
    <div className="word-list-container">
      <div className="word-list-grid" >

      <div className="row">
          <div className="ml-4">
              <h4 >Your Words:</h4>
              <div >
                <ul>{showWord()}</ul>
              </div>
          </div>
          <div className="ml-5">
              <h4>Score</h4>
              <div >
                <ul >{showScore()}</ul>
              </div>
          </div>
          </div>
          <div>
          
          </div>
      </div>
      { totalScore >0 ?    
      <h2 className="totalScore">
        Total Score: <span>{totalScore}</span><br/>
        Total trails: <span>{trials}</span><br/>
        Wrong Try: <span>{wrongCount}</span><br/>
        </h2>
        : null  }
       {/* { totalScore >0 ?    
      <h2 className="totalScore">Total Score: <span>{totalScore}</span></h2>
        : null  } */}
    </div>
  )
}

export default WordList
