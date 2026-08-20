import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiTerminal } from 'react-icons/di';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import SocialDetails from './SocialDetails';

const Header = () =>  (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          marginBottom: '10px',
        }}
      >
        <DiTerminal size={'3rem'} />
        <span>Portfolio</span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href='/#projects'>Projects</NavLink>
        <NavLink href='/#tech'>Technologies</NavLink>
        <NavLink href='#contact'>Contact</NavLink>
      </li>
    </Div2>
    <SocialDetails />
  </Container>
);

export default Header;
