import React from 'react';
import { DiFirebase, DiJava, DiMysql, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tect">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of languages, frameworks, and tools. <br />
      From Back-end to Front-end
    </SectionText>
    <List>
      <ListItem>
        
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
        <br />
        <DiReact size="3rem" />
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
        <DiMysql size="3rem" /><DiJava size="3rem" /><DiNodejs size="3rem" />
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
