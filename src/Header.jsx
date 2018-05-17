import React from "react";

import { Heading, Container, Badge } from "rebass";
import { observer } from "mobx-react";

import { offline, syncing, online } from './state';

const RedBadge = Badge.extend`
  background-color: #d32f2f;
`

const GreenBadge = Badge.extend`
  background-color: #00c853;
`

const StateBadge = ({state}) => {
  switch(state) {
    case online:
      return <GreenBadge>{state}</GreenBadge>;
    case offline:
      return <RedBadge>{state}</RedBadge>;
    case syncing:
    default:
      return <Badge>{state}</Badge>;
  }
}

@observer
class Header extends React.Component {
  render() {
    return (
      <Container>
        <Heading fontSize={[2, 3, 4, 5]}>
          Todo App
          <StateBadge state={this.props.state} />
        </Heading>
      </Container>
    );
  }
}

export default Header;
