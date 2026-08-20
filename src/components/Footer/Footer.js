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
import { person } from "../../constants/profile";

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${person.email}`}>
            click to email me
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Open to new opportunities.</Slogan>
        </CompanyContainer>
        <SocialDetails></SocialDetails>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;