import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  color: ${({primary})=>primary ? 'white' : 'black'};
  background-color: ${({primary})=>primary ? '#4aa6e3' : 'white'};
  border: ${({primary})=>primary ? 'none' : '1px #11111150 solid'};
  font-size: 1rem;
  border-radius: .3em;
  height: 3em;
`;