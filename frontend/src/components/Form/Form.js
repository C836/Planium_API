import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  width: 100%;
  padding: .5em;
`;

export const H1 = styled.h1`
  font-size: 1.8rem;
  margin-bottom: .8em;
  padding: .5em;
  background-color: #11111120;
  border-radius: .3em;
`;

export const Select = styled.select`
  border: 1px solid #11111150;
  padding: .5em;
  min-width: 0;
  border-radius: .3em;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1em;
`;

export const Label = styled.label`
  font-weight: 500;
  letter-spacing: .7px;
  margin: .3rem 0;
  font-size: .9rem;
  color: gray;
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  display: grid;
  grid-template-columns: ${({names}) => names? '1fr 1fr' : '1fr 4fr'};
  column-gap: .7em;
  margin-bottom: 1em;
`;

export const Input = styled.input`
  border: 1px solid #11111150;
  padding: .5em;
  min-width: 0;
  border-radius: .3em;
  font-size: 1rem;
  font-weight: 600;
`;

export const Preco = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .5em;
  background-color: #11111150;
  border-radius: .3em;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1.2em 0;
`;
