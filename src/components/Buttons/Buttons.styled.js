import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
  cursor: pointer;
  transition: scale 250ms;
  :hover {
    scale: 1.1;
  }
`;
