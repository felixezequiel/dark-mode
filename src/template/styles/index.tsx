import styled from "styled-components";

export const ContainerTemplate = styled.div<{ backgroundColor: string }>`
  background-color: ${ props => props.backgroundColor };
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`