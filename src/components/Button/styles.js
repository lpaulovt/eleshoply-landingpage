import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  max-width: 190px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--black-color);
  font-size: 14px;
  font-weight: 500;

  border: 2px solid var(--black-color);
  background: var(--background-color);

  transition: all 150ms ease-out;

  &:hover {
    color: var(--white-color);
    background: var(--black-color);
  }
`;