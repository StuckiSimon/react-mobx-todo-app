import React from "react";
import { observer } from "mobx-react";

import { Row, Column, Badge, Switch, Text } from "rebass";

const InlineText = Text.extend`
  padding-left: 10px;
  display: inline;
`

export default observer(({ todo, toggle }) => (
  <Row>
    <Column>
      <Switch checked={todo.done} onClick={e => toggle(todo.id)} />
      <InlineText
        fontWeight="bold"
        display="inline"
        children={todo.text}
      />
      <Badge>{todo.categoryId}</Badge>
    </Column>
  </Row>
));
