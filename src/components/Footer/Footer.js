import React from "react";
import SocialDetails from "../Header/SocialDetails";

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:pablo.benito@rocketmail.com">
            click to email me
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Dexterity is forged everyday</Slogan>
        </CompanyContainer>
        <SocialDetails></SocialDetails>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;