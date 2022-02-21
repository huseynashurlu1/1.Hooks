import React, { Component } from 'react'

class ClassComponent extends Component {
    state = {
        counter: 0,
        counter2: 0,
        timer: 0
    }

     componentDidMount() {
        this.myTimer = setInterval(() => {
            this.setState({
                timer: this.state.timer + 1
            })
        }, 1000);
     }

        //  componentDidUpdate(prevState,nextState) {
        //  if(prevState.counter !== this.state.counter) {
        //      console.log("componentDidUpdate has worked!")
        //  }
        //  else if(prevState.counter !==this.state.counter2) {
        //     console.log("componentDidUpdate has worked!")
        //  }

     componentWillUnmount() {
        clearInterval(this.myTimer)
     }

    Increase = () => {
        this.setState({
            counter: this.state.counter+1
        })
    }
  render() {
    const {counter,timer} = this.state;
    return (
      <div className='classComponents'>
          <h4>{counter}</h4>
          <h2>{timer}</h2>
          <button onClick={this.Increase}>Plus</button>
      </div>
    )
  }
}

export default ClassComponent