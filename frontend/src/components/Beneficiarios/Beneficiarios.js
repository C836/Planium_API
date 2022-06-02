import styled from "styled-components";

export const Beneficiarios = styled.ul`
  padding: 0.15em 0.5em;
  border: 1px solid #11111130;
  border-radius: 0.3em;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1.2em 0;
  box-sizing: border-box;
  list-style: none;
`;

export const Cliente = styled.li`
  position: relative;
  background-color: #11111120;
  padding: 0.35em;
  margin: 0.5em 0;
  border-radius: 0.3em;
`;

export const Nome = styled.h4`
  margin-top: 0.6em;
  font-weight: 400;
  word-wrap: break-word;
`;

export const Divisor = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #11111150;
  font: 1.2rem Helvetica-bold;
`;

export const Total = styled.h4`
  position: absolute;
  top: 0.2em;
  right: 0.4em;
`;
