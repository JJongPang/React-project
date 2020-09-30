import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";

class App extends Component {
  render() {
    return (
      <div>
        <Habits />
      </div>
    );
  }
}

export default App;
