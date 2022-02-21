import React, { Component } from 'react'

class Ref extends Component {
    constructor(props){
        super(props);
        this.userName = React.createRef();
    }

    ShowUsername() {
        console.log(this.userName);
    }
  render() {
    return (
      <div>
          <input type="text" ref={this.userName}/>
          <button onClick={this.ShowUsername}>SHOW</button>
      </div>
    )
  }
}
export default Ref;