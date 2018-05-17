import React from "react";
import { observer } from "mobx-react";

import Task from "./Task";

@observer
class TaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Task todo={todo} toggle={this.props.toggle} key={todo.id} />
        ))}
      </div>
    );
  }
}

export default TaskList;
