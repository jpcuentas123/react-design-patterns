import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface SplitScreenProps {
  leftWeight?: number;
  rightWeight?: number;
}

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div<{ weight: number }>`
  flex: ${(props) => props.weight};
`;

const SplitScreen: React.FC<PropsWithChildren<SplitScreenProps>> = (props) => {
  const { children, leftWeight = 1, rightWeight = 1 } = props;
  const [left, right] = React.Children.toArray(children);

  return (
    <Container>
      <Panel weight={leftWeight}>{left}</Panel>
      <Panel weight={rightWeight}>{right}</Panel>
    </Container>
  );
};

export default SplitScreen;
