import React from 'react'
class App extends React.Component {
    constructor(props) {
        super(props);
         this.state = {name: 'fsdf'};
      }
  render () {
    return (
    <div>Let's Start game! {this.state.name}</div>
    ) 
  } 
}  
export default App