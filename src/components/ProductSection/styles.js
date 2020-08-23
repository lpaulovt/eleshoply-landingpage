import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--white-color);
  box-shadow: 0px 5px 15px rgba(187, 187, 187, 0.15);
`;

export const CardInfo = styled.div`
  padding: 130px  50px  130px 100px ;
  height: 100%;
`;

export const CardTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-color);
  margin-bottom: 70px;
`;


export const Price = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;

export const PriceLabel = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: var(--gray-color);
  margin-right: 5px;
`;

export const Value = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: var(--black-color);
`;

export const CardImage = styled.img`
  object-fit: cover;
  height: 95%;
  margin: 0 15px;
`;