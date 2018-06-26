import React, {Component} from 'react';
import './App.css';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount(){
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount(){
    setInterval(()=> this.getTimeUntil(this.props.deadline), 1000)
  }

  leadingZero(num){
    return num < 10 ? '0' + num : num;
  }
  getTimeUntil(deadline){
    //use const for constants and let instead of var
    // new Date() by default grabs the current time
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days)
    this.setState({days, hours, minutes, seconds})
    //when key and value look the same, you can short hand it to a single word
    this.setState({days, hours, minutes, seconds});
  }
  //render method must always return
    render(){
      return(
        <div>
          <div className="Clock-days">{this.leadingZero(this.state.days)} days </div>
          <div className="Clock-hours">{this.leadingZero(this.state.hours)} hours</div>
          <div className="Clock-minutes">{this.leadingZero(this.state.minutes)} minutes </div>
          <div className="Clock-seconds">{this.leadingZero(this.state.seconds)}  seconds </div>
        </div>
      )
    }
}

export default Clock;
