import React from "react";
import { DiFirebase, DiReact, DiGitMerge } from "react-icons/di";
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
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider></SectionDivider>
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've trained in Henry bootcamp for fullstack development with JavaScript and I have learned Python on the side. Django is my favorite framework for backend development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node & Django
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGitMerge size="3rem" />
        <ListContainer>
          <ListTitle>CICD</ListTitle>
          <ListParagraph>
            Currenly training
            <br />
            Next for CI/CD
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;