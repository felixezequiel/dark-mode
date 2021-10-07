import styled from "styled-components";

export const ButtonCustom = styled.button.attrs(props => {
  return {
    type: props.type
  }
})<{ color: string, backgroundColor: string, type: string }>`
  width: 100%;
  outline: none;
  border-radius: .3em;
  background-color: ${ props => props.backgroundColor };
  color: ${ props => props.color };
  border: none;
  padding: 10px;
  :active {
    transform: scale(1.01);
  }
`