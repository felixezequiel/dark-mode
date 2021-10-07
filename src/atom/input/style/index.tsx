import styled from "styled-components";

export const InputCustom = styled.input<{ color: string }>`
  width: 100%;
  padding: 10px;
  margin: 5px;
  height: 40px;
  border-radius: .3em;
  border: 1px solid ${ props => props.color };
  outline: none;
  color: ${ props => props.color };
  background-color: transparent;
  ::placeholder {
    color: ${ props => props.color };
    opacity: .5;
  }
`