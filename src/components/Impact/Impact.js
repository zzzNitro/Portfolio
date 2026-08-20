import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./ImpactStyles";
import { metrics } from "../../constants/profile";

const Impact = () => (
  <Section>
    <SectionDivider></SectionDivider>
    <SectionTitle>Impact</SectionTitle>
    <Boxes>
      {metrics.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Impact;
