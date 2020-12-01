import React from 'react';
import Menu from "./Menu"

export default class Header extends React.Component{ 
    
    constructor(props){
        super(props)
        this.state={name:"poom"}
    }
    render() {
      return (
        <div>
          <Menu />
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
