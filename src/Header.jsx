import React from "react";

import { Heading, Badge, Provider, Divider } from "rebass";
import { observer } from "mobx-react";

@observer
class Header extends React.Component {
  render() {
    return (
      <Heading fontSize={[2, 3, 4, 5]}>
        Todo App
        <Badge>{this.props.state}</Badge>
      </Heading>
    );
  }
}

export default Header;
