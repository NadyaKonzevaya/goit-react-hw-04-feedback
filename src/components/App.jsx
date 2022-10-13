import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";
import { useState } from "react";

export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // buttonNames = Object.keys(this.state);
  // changeFeedback = (buttonName) => this.setState(prevState => ({ [buttonName]: prevState[buttonName] + 1 }))

  const changeFeedback = (buttonName) => {
    switch (buttonName) {
      case "good":
        setGood(prev => prev + 1);
        break;
      case "neutral":
        setNeutral(prev => prev + 1);
        break;
      case "bad":
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  }
  
  // countTotalFeedback = () => {
  //   return  Object.values(this.state).reduce((total, value) => total+value, 0)
  // }

  const total = good + neutral + bad;
  

  // countPositiveFeedbackPercentage = () => {
  //   return Math.round((this.state.good * 100) / this.countTotalFeedback());
  // } 
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / total);
  }
  
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
          <FeedbackOptions options={["good", "neutral","bad"]} onLeaveFeedback={changeFeedback} />
        </Section>  
        <Section title="Statistics">
          {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={countPositiveFeedbackPercentage()} /> :<Notification message="There is no feedback" />}
        
        </Section>
    </div>
    );
  
};
