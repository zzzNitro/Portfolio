import React from "react";
import { DiGo, DiReact, DiGitMerge } from "react-icons/di";
import { RiRobotLine } from "react-icons/ri";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  StackText,
} from "./TechnologiesStyles";
import { skills } from "../../constants/profile";

const allSkills = [
  ...skills.languages,
  ...skills.backend,
  ...skills.frontend,
  ...skills.data,
  ...skills.practices,
  ...skills.aiTooling,
  ...skills.infra,
].join(" · ");

const Technologies = () => (
  <Section id="tech">
    <SectionDivider></SectionDivider>
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      Production experience with Go and Django backends, React/Next.js frontends, and PostgreSQL — with AI-assisted tooling built into daily workflow.
    </SectionText>
    <List>
      <ListItem>
        <DiGo size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Go, Django, Python <br />
            Node.js, Express, Flask
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            React, Next.js <br />
            TypeScript, Three.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RiRobotLine size="3rem" />
        <ListContainer>
          <ListTitle>AI-Assisted Workflow</ListTitle>
          <ListParagraph>
            Claude Code, Cursor <br />
            daily in production work
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGitMerge size="3rem" />
        <ListContainer>
          <ListTitle>Testing &amp; CI/CD</ListTitle>
          <ListParagraph>
            Unit &amp; integration testing <br />
            CI/CD, Docker, Vercel
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <StackText>{allSkills}</StackText>
  </Section>
);

export default Technologies;
