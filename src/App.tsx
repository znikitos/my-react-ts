import React, { Component } from "react";
import Button from "./components/button";
import "./App.css";

interface AppProps {
  index: number;
}

class App extends Component<{}, AppProps> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  increment = (): void => {
    let { index } = this.state;
    this.setState({ index: index += 1 });
  };

  render(): JSX.Element {
    const { index } = this.state;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Button index={index} increment={this.increment} />
      </div>
    );
  }
}

export default App;
