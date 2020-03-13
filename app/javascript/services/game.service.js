

const Url_New_Round = "https://boggle-backend.herokuapp.com/rounds/new"

export const gameService = {
    startGame,evaluateWord
  };
  
  
  function startGame() {
  debugger;
    return fetch(Url_New_Round)
      .then(response => {
        return response.json();
      })
      .then(response => {
          //return response;
         if (response && response.setup) {
            return response;
         }
         else return null;
  
      })
       
  }
  function evaluateWord(data) {
debugger;
let param = '?word=' + data.word;
return fetch('/v1/game/evaluate' + param)
    .then(response => {debugger;
      return response.json();
    })
    // .then(response => {
    //   //return response;
    //  if (response && response.Matched) {
    //     return response;
    //  }
    //  else return null;

  //});




         //return fetch(URL_CHECK_WORD, {
    //   method: "POST",
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ "word": data.word})
    // })
    // .then(res => {
    //     //res ? this.calculateScore(word)
    //     return res.json();
    //   })
     
  }