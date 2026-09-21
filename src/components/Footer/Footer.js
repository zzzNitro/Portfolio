import React from "react";
import SocialDetails from "../Header/SocialDetails";

import {
  BackToTop,
  Bottom,
  CompanyContainer,
  Copyright,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialIconsContainer,
  Top,
} from "./FooterStyles";
import { person } from "../../constants/profile";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const Footer = () => {
  return (
    <FooterWrapper>
      <Top>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Navigate</LinkTitle>
            <LinkItem href="/#projects">Projects</LinkItem>
            <LinkItem href="/#tech">Technologies</LinkItem>
            <LinkItem href="#contact">Contact</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href={`mailto:${person.email}`}>{person.email}</LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Open to new opportunities.</Slogan>
          </CompanyContainer>
          <SocialDetails></SocialDetails>
        </SocialIconsContainer>
      </Top>
      <Bottom>
        <Copyright>
          © {new Date().getFullYear()} {person.name}. All rights reserved.
        </Copyright>
        <BackToTop type="button" onClick={scrollToTop}>
          Back to top ↑
        </BackToTop>
      </Bottom>
    </FooterWrapper>
  );
};

export default Footer;