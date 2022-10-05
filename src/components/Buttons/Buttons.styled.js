import styled from 'styled-components';

export const Btn = styled.button`
  width: 100px;
  height: 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: scale 250ms;
  :hover {
    scale: 1.1;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }
`;
