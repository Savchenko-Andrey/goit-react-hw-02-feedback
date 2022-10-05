import React, { Component } from "react";
import { Notification } from './Notificaton/Notification'
import {Sections,Title, Box} from './App.styled'
import { Buttons } from './Buttons/Buttons';
import { Statistics } from './Statistics/Statistics'

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

    onLeaveFeedback = props => {
      this.setState(preventState => {
        return { [props]: (preventState[props] += 1) };
      });
    };
  
  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return ((good * 100) / (good + neutral + bad)).toFixed(1) + '%';
  };
  
  render() {
    const KEYS = Object.keys(this.state);
    const Obj = Object.entries(this.state);
     return (
    <div
      style={{
           display: 'flex',
           flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
       >
          <Sections>
           <Title>Please leave Feedback</Title>
           <Box>
             <Buttons options={KEYS} onLeaveFeedback={this.onLeaveFeedback} />
           </Box>
           {this.countTotalFeedback(this.state) === 0 ? (
             <Notification message="There is no feedback" />
           ) : (
             <Statistics
              message="Statistics"
              Obj={Obj}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
              state={this.state} />
            )}           
         </Sections>
    </div>
    );
  };
};
