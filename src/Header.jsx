import React from "react";

import { Heading, Container, Badge, Provider, Divider } from "rebass";
import { observer } from "mobx-react";

@observer
class Header extends React.Component {
  render() {
    return (
      <Container>
        <Heading fontSize={[2, 3, 4, 5]}>
          Todo App
          <Badge>{this.props.state}</Badge>
        </Heading>
      </Container>
    );
  }
}

export default Header;
