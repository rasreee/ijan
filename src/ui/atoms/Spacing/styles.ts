import styled from "styled-components";

type Props = { height: number; width: number };

export const Container = styled.div`
  height: ${(props: Props) => `${props.height}px`};
  width: ${(props: Props) => `${props.width}px`};
  border-style: solid;
  border-color: black;
  border-width: 0.5px;
`;
