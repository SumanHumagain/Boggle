import React from "react"

class PageLoad extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div className="page-load">
              <p>
                Welcome to boggle game!
              </p>
              <h2>Are you ready?</h2>
              <input type="Button" value="Lets start the game" />
      </div>
      </React.Fragment>
    );
  }
}

export default PageLoad
