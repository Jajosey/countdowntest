import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  changeDeadline(){
    //never mutate or change state directly, as in "this.state.deadLine = 'December 25, 2018'"
    // use setState() instead
    console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline})
  }

  render(){
    // must return the jsx
    return(
      <div className="App">
          <div className="App-title">
              Countdown to {this.state.deadline}
          </div>
          <div>
            <Clock
                deadline={this.state.deadline}
            />
          </div>
          <Form inline>
            <FormControl
            className="Deadline-input"
                 onChange={event => this.setState({newDeadline: event.target.value})}
            />
            <Button onClick={() => this.changeDeadline()}>Submit</Button>
          </Form>

      </div>
    )
  }
}

export default App;
