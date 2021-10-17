import React from 'react';
import { DiCss3, DiEclipse, DiFirebase, DiHtml5, DiIntellij, DiJava, DiMysql, DiNodejs, DiReact, DiVisualstudio, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of languages, frameworks, and tools. <br />
      From Back-end to Front-end.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, HTML, <br />
            and CSS
          </ListParagraph>
        </ListContainer>
        <br />
        <a style={{ display: "flex", alignItems: "center", color: "white"}}>
          <DiReact size="5rem" /><DiHtml5 size="5rem" /><DiCss3 size="5rem" />
        </a>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, Java, C++, <br />
            and Databases
          </ListParagraph>
        </ListContainer>
        <br />
        <a style={{ display: "flex", alignItems: "center", color: "white"}}>
          <DiMysql size="5rem" /><DiJava size="5rem" /><DiNodejs size="5rem" />
        </a>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>IDE's</ListTitle>
          <ListParagraph>
            Experience with <br />
            VSCode, Eclipse, <br />
            and IntelliJ 
          </ListParagraph>
        </ListContainer>
        <br />
        <a style={{ display: "flex", alignItems: "center", color: "white"}}>
          <DiVisualstudio size="5rem" /><DiEclipse size="5rem" /><DiIntellij size="5rem" />
        </a>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
