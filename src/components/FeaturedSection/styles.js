import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  position: relative;
`;
export const SideBar = styled.div`
  width: 8%;
  height: 100%;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;
export const ContainerContent = styled.section`
  width: 84%;
  height: 100%;
  margin: 0 auto;
`;
export const Featured = styled.div`
  width: 100%;
  height: 95%;
  background: var(--white-color);
  display: flex;
  align-items: flex-end;
  box-shadow: 0px 4px 8px rgba(154, 155, 156, 0.15);
`;
export const FeaturedContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5vh 0 15vh;
`;
export const FeaturedImage = styled.img`
  height: 90%;
  margin-right: 25px;
  object-fit: cover;
`;
export const  Title = styled.h1`
  font-size: 72px;
  font-weight: 500;
`;
export const  Description = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: var(--gray-color);
  margin-bottom: 80px;
`;
export const  Price = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;
export const  PriceLabel = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: var(--gray-color);
  margin-right: 5px;
`;
export const  Value = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: var(--black-color);
`;

export const SocialNetwork = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 15px;
  transition: all 150ms ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;