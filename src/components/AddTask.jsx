import React from "react";

import { observer } from "mobx-react";

import { Card, Subhead, Input, Button } from "rebass";

@observer
class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  updateText = (e) => {
    this.setState({
      text: e.target.value
    });
  }
  addTodo = () => {
    this.props.addTodo({ text: this.state.text });
  }
  render() {
    return (
      <Card>
        <Subhead>Neues Item</Subhead>
        <Input placeholder="Was musst du noch erledigen?" value={this.state.text} onChange={this.updateText} />
        <Button children="Hinzufügen" onClick={this.addTodo} />
      </Card>
    );
  }
}

export default AddTask;
