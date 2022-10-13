import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";
import { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  buttonNames = Object.keys(this.state);

  changeFeedback = (buttonName) => this.setState(prevState => ({ [buttonName]: prevState[buttonName] + 1 }))
  
  countTotalFeedback = () => {
    return  Object.values(this.state).reduce((total, value) => total+value, 0)
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  } 

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    


    return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.buttonNames} onLeaveFeedback={this.changeFeedback} />
        </Section>  
        <Section title="Statistics">
          {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} /> :<Notification message="There is no feedback" />}
        
        </Section>
    </div>
    );
  }
};
