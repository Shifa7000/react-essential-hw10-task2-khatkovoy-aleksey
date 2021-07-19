import React from "react";
import { Context } from "../context";
import TestComponent from "../TestComponent";
import "./index.css";

class App extends React.Component {
  state = { theme: "light" };
  changeThemeHandle(themeValue) {
    this.setState({ theme: themeValue });
  }
  render() {
    const contextValue = { theme: this.state.theme };
    const classes = this.state.theme ? `App ${this.state.theme}` : `App`;
    return (
      <div className={classes}>
        <Context.Provider value={contextValue}>
          <TestComponent onChangeTheme={this.changeThemeHandle.bind(this)} />
        </Context.Provider>
      </div>
    );
  }
}

export default App;
