import React, { Component } from 'react'

export default class GetSnapb extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'cons'
    }
  }

  getSnapshotBeforeUpdate(){
    return this.state.name;
  }

  componentDidUpdate(prevProp, prevState, snap){
    console.log("i am running")
    // console.log(prevState.name,snap,prevProp);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({name: Math.random()})
    }, 1000)
}
  render() {
    return (
      <div>
       <p>{this.state.name}</p>
      </div>
    )
  }
}