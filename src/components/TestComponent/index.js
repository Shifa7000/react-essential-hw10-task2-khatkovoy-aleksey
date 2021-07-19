import React from "react";
import { Context } from "../context";
import "./index.css";

class TestComponent extends React.Component {
  static contextType = Context;

  onClickHandle(e) {
    const theme = this.context.theme === "light" ? "dark" : "light";
    this.props.onChangeTheme(theme);
  }

  render() {
    return (
      <div className="TestComponent">
        <button onClick={this.onClickHandle.bind(this)}>Change theme</button>
      </div>
    );
  }
}

export default TestComponent;
