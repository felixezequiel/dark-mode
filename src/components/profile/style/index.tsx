import styled from "styled-components";

export const ImageProfile = styled.img<{ color: string, height: number }>`
  height: ${ props => props.height + 'px' };
  margin: 10px;
  cursor: pointer;
  filter: invert(${ props => props.color === 'white' ? 0 : 100 });
`