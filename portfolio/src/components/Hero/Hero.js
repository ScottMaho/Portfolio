import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       I'm Scott Mahoney, <br />
       Welcome to My <br />
       Personal Portfolio
     </SectionTitle>
     <SectionText>
      I'm a Application Engineering Analyst with a love for all things tech. A few of the projects I've worked on and the tools I've worked with can be found on this website.
     </SectionText>
   </LeftSection>
 </Section>
);

export default Hero; 