import axios from 'axios';
import React, { Component } from 'react'

export default class Cons extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"ankit",
            data:[]
        };
    }
    componentDidMount(){
        setTimeout(()=>{
            axios.get('https://api.adviceslip.com/advice').then((res)=>{
                this.setState({data:res.data})
            })
        },1000)
    }
  render() {
    
    return (
      <div>{this.state.data.slip && this.state.data.slip.advice}</div>
    )
  }
}
