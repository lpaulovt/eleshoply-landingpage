import React from 'react';

import { 
  FiSearch,
  FiHeart,
  FiShoppingBag
} from 'react-icons/fi';

import { Container, MenuContainer, Menu, MenuBar, Brand, LeftContent, RightContent, LoginButton } from './styles';

export default function Header() {
  return (
    <>
    <MenuContainer>
      <Menu>
        <MenuBar />
        <MenuBar />
        <MenuBar />
      </Menu>
    </ MenuContainer>

    <Container>
      <LeftContent>
        <Brand>
          EleShoply.
        </Brand>
      </LeftContent>

      <RightContent>
        <FiSearch className='Icon' />
        <FiHeart className='Icon' />
        <FiShoppingBag className='Icon' />
        <LoginButton>
          Login
        </LoginButton>
      </RightContent>

    </Container>
    </>
  )
}