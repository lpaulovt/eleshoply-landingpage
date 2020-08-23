import styled from 'styled-components'

export const Container = styled.div`
  width: 48.5%;
  height: 100%;
  background: var(--white-color);
  box-shadow: 0px 10px 30px rgba(187, 187, 187, 0.2);
  display: flex;
  padding: 10px;
`;

export const CardInfo = styled.div`
  width: 55%;
  height: 100%;
  padding: 20px 25px;
`;

export const CardName = styled.h3`
  font-size: 12px;
  font-weight: 600;
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 110px;
`;

export const CardTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-color);
  margin-bottom: 40px;
`;

export const CardImage = styled.img`
  width: 45%;
  height: 100%;
  object-fit: cover;
`;

export const CardButton = styled.button`
  width: 100%;
  max-width: 145px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--black-color);
  font-size: 12px;
  font-weight: 500;

  border: 2px solid var(--black-color);
  background: var(--white-color);

  transition: all 150ms ease-out;

  &:hover {
    color: var(--white-color);
    background: var(--black-color);
  }
`;
