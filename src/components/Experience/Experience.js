import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  RoleCard,
  RoleDates,
  RoleHeader,
  RoleHighlights,
  RoleList,
  RoleTitle,
} from "./ExperienceStyles";
import { experience } from "../../constants/profile";

const formatDate = (isoDate) => {
  if (!isoDate) return "Present";
  const [year, month] = isoDate.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

const Experience = () => (
  <Section id="experience">
    <SectionDivider></SectionDivider>
    <SectionTitle>Experience</SectionTitle>
    <RoleList>
      {experience.map((role) => (
        <RoleCard key={role.id}>
          <RoleHeader>
            <RoleTitle>
              {role.title} — {role.company}
            </RoleTitle>
            <RoleDates>
              {formatDate(role.start)} – {formatDate(role.end)} · {role.location}
            </RoleDates>
          </RoleHeader>
          <RoleHighlights>
            {role.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </RoleHighlights>
        </RoleCard>
      ))}
    </RoleList>
  </Section>
);

export default Experience;
