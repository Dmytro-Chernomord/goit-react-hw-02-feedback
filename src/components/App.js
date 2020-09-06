import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Controls from './Controls/Controls';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeStatistics = button => {
    this.setState(prev => {
      return { [button]: prev[button] + 1 };
    });
  };

  countTotalFeedback() {
    const { bad, good, neutral } = this.state;
    return bad + good + neutral;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral } = this.state;
    return (((good + neutral) * 100) / this.countTotalFeedback()).toFixed(2);
  }

  render() {
    const { bad, good, neutral } = this.state;

    return (
      <div>
        <h1>HW02</h1>
        <Section title="Please your leave feedback">
          <Controls
            options={this.state}
            onLeaveFeedback={this.changeStatistics}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={
              this.countPositiveFeedbackPercentage() > 0
                ? this.countPositiveFeedbackPercentage()
                : 0
            }
          />
        </Section>
      </div>
    );
  }
}

export default App;
