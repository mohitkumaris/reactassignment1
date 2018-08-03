import React, { Component } from 'react';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import './App.css';

class App extends Component {
  state={
   username:"mohit"
  };

  userNameClickHandler=(newName)=>{
    this.setState(
      {
         username:newName
      }
    )
  };

  userNameChangeHandler=(event)=>{
    this.setState(
      {
        username:event.target.value
      }
    )
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.userNameClickHandler.bind(this,"aarti")} >Change UserName</button>
        <UserOutput username={this.state.username}/>
        <UserInput change={this.userNameChangeHandler} name={this.state.username} />

      </div>
    );
  }
}

export default App;
