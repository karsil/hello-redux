import React, { Component } from "react";
import Counter from "./Counter";
import reducer from "./reducers/reducer";
import { createStore } from "redux";
import { Provider } from 'react-redux'

const initialState = { counter: 0};

const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return
      <div>
        <Provider store={store}>
        <Counter counter={this.props.counter} />
        </Provider>
      </div>
  }
}

export default App;
