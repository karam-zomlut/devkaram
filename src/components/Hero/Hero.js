import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Frontend Engineer with a focus on designing stunning interfaces and creating smooth user experiences. Former Google for Startups intern who has a passion for creating products that inspire and delight.
      </SectionText>
      <Button>
        Learn More
      </Button>
    </LeftSection>
    
  </Section>
);

export default Hero;