import React, { Component } from 'react'

export default class shouldComp extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Should comp never changed'
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({name: "This is a componentDidMount Method"})
    }, 5000)
}
  render() {
    return (
      <div>
       <p>{this.state.name}</p>
      </div>
    )
  }
}