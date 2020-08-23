import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 335px;
  height: 350px;
  padding: 45px;
  background: var(--white-color);
  box-shadow: 0px 10px 30px rgba(187, 187, 187, 0.2);
  transition: all 200ms ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
  color: var(--black-color);
  margin-bottom: 30px;
`;
export const Title = styled.h3`
  font-size: 22px;
  font-weight: 500px;
  color: var(--black-color);
  margin-bottom: 25px;
`;
export const Description = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400px;
  color: var(--gray-color);
  margin-bottom: 35px;
`;
export const ButtonReadMore = styled.button`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: var(--black-color);
  margin-bottom: 35px;
  background: none;
  border: none;
  `;