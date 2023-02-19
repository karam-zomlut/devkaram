import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container style={{marginBottom: '1.5rem'}}>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <img 
            src="/images/logo.svg"
            alt="logo"
            style={{ width: '3rem', height: '3rem', marginRight: '.8rem' }}
          /> <Span>devkaram</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href={"#projects"}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#tech"}>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#about"}>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com'>
        <AiFillGithub size="2.5rem" />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin size="2.5rem" />
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size="2.5rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
