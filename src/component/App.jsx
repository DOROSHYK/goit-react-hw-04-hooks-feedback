import React, { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Sections/Section";
import Notification from "./Notification/Notification";

const options = ["good", "bad", "neutral"];

export default function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [goodFeedback, setGood] = useState(0);
  const [neutralFeedback, setNeutral] = useState(0);
  const [badFeedback, setBad] = useState(0);

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    // const result = good + neutral + bad;
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    // const result = this.countTotalFeedback();
    // const { good } = this.state;
    // const percentage = (good * 100) / result;
    // return Math.round(percentage);
    return Math.round((goodFeedback / countTotalFeedback()) * 100) || 0;
  };

  const onLeaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  // const objKey = Object.keys(this.state);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {countTotalFeedback() === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            // options={[ goodFeedback, neutralFeedback, badFeedback ] }
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
}
