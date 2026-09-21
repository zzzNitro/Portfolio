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
      {/* id lets the Header observe when this CTA scrolls out of view */}
      <div id="hero-cta">
        <Button onClick={() => (window.location = "#contact")}>Get in Touch</Button>
      </div>
    </LeftSection>
  </Section>
);

export default Hero;