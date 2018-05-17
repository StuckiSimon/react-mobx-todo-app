import React from "react";
import { observer } from "mobx-react";

import { Container } from "rebass";

import Task from "./Task";
import AddTask from "./AddTask";

@observer
class TaskList extends React.Component {
  render() {
    return (
      <Container>
        {this.props.todos.map(todo => (
          <Task todo={todo} toggle={this.props.toggle} key={todo.id} />
        ))}
        <AddTask addTodo={this.props.addTodo} />
      </Container>
    );
  }
}

export default TaskList;
