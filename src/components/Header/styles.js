import styled from 'styled-components';

export const Container = styled.header`
  width: 84%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const MenuContainer = styled.div`
  width: 8%;
  height: 15vh;
  background: var(--black-color);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;
`;

export const Menu = styled.div`
  width: 23px;
  height: 23px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
 
`;

export const MenuBar = styled.span`
  width: 100%;
  height: 2px;
  margin: 2.5px 0;
  background: var(--white-color);
`;

export const Brand = styled.h3`
  color: var(--black-color);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: .03em;

  margin-left: 5vh;
`;

export const LeftContent = styled.div`
  display:flex;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & .Icon {
    width: 22px;
    height: 22px;
    color: var(--black-color);
    margin-right: 25px;
    cursor: pointer;
  }

`;

export const LoginButton = styled.button`
  width: 105px;
  height: 45px;
  background: var(--black-color);
  color: var(--white-color);
  font-size: 14px;
  font-weight: 500;
  border: none;
  letter-spacing: 0.5px;
  transition: opacity 100ms ease-out;

  &:hover {
    opacity: 0.95;
  }
`;