import React from "react";
import { DiGo, DiReact, DiGitMerge } from "react-icons/di";
import { AiOutlineTeam, AiOutlineMessage } from "react-icons/ai";
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
  ...skills.waysOfWork,
  ...skills.softSkills,
  ...skills.infra,
].join(" · ");

const Technologies = () => (
  <Section id="tech" fullHeight>
    <SectionDivider></SectionDivider>
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      Production experience with Go and Django backends, React/Next.js frontends, and PostgreSQL, delivered in Scrum/Kanban teams with regular code review and cross-team collaboration.
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
        <AiOutlineTeam size="3rem" />
        <ListContainer>
          <ListTitle>Way of Work</ListTitle>
          <ListParagraph>
            Scrum, Kanban, sprint planning <br />
            Code review, cross-team collaboration
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGitMerge size="3rem" />
        <ListContainer>
          <ListTitle>Testing &amp; CI/CD</ListTitle>
          <ListParagraph>
            Unit &amp; integration testing <br />
            CI/CD, Docker, Vercel, AI-assisted tooling
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem $spanFull>
        <AiOutlineMessage size="3rem" />
        <ListContainer>
          <ListTitle>Soft Skills</ListTitle>
          <ListParagraph>
            Assertive communication <br />
            Ownership, adaptability
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <StackText>{allSkills}</StackText>
  </Section>
);

export default Technologies;
