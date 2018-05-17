import React from "react";

import { Provider, Divider } from "rebass";

import { observer } from "mobx-react";

import TodoStore from "./TodoStore";
import TaskList from "./TaskList";
import Header from "./Header";

@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <Provider
          theme={{
            fonts: {
              sans: '"Avenir Next", Helvetica, sans-serif'
            },
            fontSizes: [12, 16, 24, 36, 48, 72]
          }}
        >
          <Header state={TodoStore.state} />
          <Divider />
          <TaskList todos={TodoStore.todos} toggle={TodoStore.toggle} addTodo={TodoStore.addTodo} />
        </Provider>
      </div>
    );
  }
}

export default App;
