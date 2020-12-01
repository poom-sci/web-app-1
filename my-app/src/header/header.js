import React from 'react';

export default class Header extends React.Component{ 
    //this.state={name:"poom"}
    state={name:"poom"}
    constructor(props){
        super(props)
    }
    render() {
      return (
        <div>
          <button onClick={this.clickHandler} >CLICK ME!</button>
          <h1 >Hello, {this.state.name}</h1>
        </div>
        )
    }

    clickHandler=()=>{
        //console.log(event.currentTarget)
        this.setState({name:this.state.name+"1"})
    }

}
