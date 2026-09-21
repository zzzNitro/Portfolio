import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiTerminal } from 'react-icons/di';


import { Container, Div1, Div2, Div3, FloatingCta, NavLink, SocialIcons } from './HeaderStyles';
import SocialDetails from './SocialDetails';

const Header = () => {
  const [isScrolledPastCta, setIsScrolledPastCta] = useState(false);
  const [sidebarOffset, setSidebarOffset] = useState(24);

  useEffect(() => {
    const ctaEl = document.getElementById('hero-cta');
    if (!ctaEl) return undefined;

    // Only treat the CTA as "gone" once it has scrolled above the viewport,
    // not before it has appeared (e.g. on initial load).
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledPastCta(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    observer.observe(ctaEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Measure the real edge of the content column instead of guessing with a
    // vw-based calc, so the sidebar never overlaps the content at any width.
    const updateSidebarOffset = () => {
      const mainEl = document.querySelector('main');
      if (!mainEl) return;
      const gapFromContent = window.innerWidth - mainEl.getBoundingClientRect().right;
      setSidebarOffset(Math.max(16, gapFromContent + 16));
    };

    updateSidebarOffset();
    window.addEventListener('resize', updateSidebarOffset);
    return () => window.removeEventListener('resize', updateSidebarOffset);
  }, []);

  return (
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
      <Div2 $scrolled={isScrolledPastCta} $rightOffset={sidebarOffset}>
        <li>
          <NavLink href='/#projects'>Projects</NavLink>
          <NavLink href='/#tech'>Technologies</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </li>
        {isScrolledPastCta && <FloatingCta href='#contact'>Get in Touch</FloatingCta>}
      </Div2>
      <SocialDetails />
    </Container>
  );
};

export default Header;
