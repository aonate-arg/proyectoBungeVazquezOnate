import React, { Component } from 'react'

class Notfound extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="noresult">Notfound</div>
        <img src="/img/thinking-emoji.gif" alt="thinking emoji" className='gif'/>
        <div className="noresult">Notfound</div>
      </React.Fragment>
    )
  }
}

export default Notfound