import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
import Reset from "./reset";

class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;
