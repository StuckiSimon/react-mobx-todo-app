import React from "react";
import { observer } from "mobx-react";

import { Row, Column, Badge, Switch } from "rebass";

export default observer(({ todo, toggle }) => (
  <Row>
    <Column>
      <Switch checked={todo.done} onClick={e => toggle(todo.id)} />
      {todo.text}
      <Badge>{todo.categoryId}</Badge>
    </Column>
  </Row>
));
