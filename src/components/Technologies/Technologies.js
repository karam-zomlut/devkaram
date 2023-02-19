import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider style={{ marginBottom: '6rem' }} />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      With experience using a range of technologies such as React, Redux, and Express, I am skilled in developing scalable and efficient web applications that provide exceptional user experiences.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Redux, JavaScript, HTML, CSS, Bootstrap, Material UI, and more.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Express.js, MongoDB, PostgreSQL, and more.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem' />
        <ListContainer>
          <ListTitle>UX/UI</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma, Adobe XD, and more.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    <SectionDivider style={{marginTop: '2rem'}} />
  </Section>
);

export default Technologies;
