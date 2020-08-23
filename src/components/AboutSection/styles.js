import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Background = styled.div`
  width: 100%;
  height: 60vh;
  background: var(--black-color);
  position: absolute;
  top: 15%;
  left: 0;
  z-index: -1;
`;

export const ContentContainer = styled.div`
  width: 84%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 15% 0  30px;
  font-size: 42px;
  font-weight: 500;
  letter-spacing: 0.05px;
  color: var(--white-color);
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;