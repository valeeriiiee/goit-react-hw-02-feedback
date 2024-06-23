import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // total feedback
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // positive feedback percentage
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  // change state when button is clicked
  handleClick = type => {
    this.setState(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = ['good', 'neutral', 'bad'];

    return (
      <div>
        <section title="Please Leave A Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </section>
        <section title="Statistics">
          {total > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={total} />
          ) : (
            <Notification />
          )}
        </section>
      </div>
    );
  }
}
