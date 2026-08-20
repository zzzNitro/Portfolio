import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { person } from "../../constants/profile";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        {person.name}
      </SectionTitle>
      <SectionText>{person.tagline}</SectionText>
      <Button onClick={() => (window.location = "#contact")}>Get in Touch</Button>
    </LeftSection>
  </Section>
);

export default Hero;