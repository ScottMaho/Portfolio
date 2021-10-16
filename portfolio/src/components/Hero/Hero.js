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
      I'm a Computer Science major seeking a Software Engineering position. A few of the projects I've worked on and 'some other info' can be found on this website.
     </SectionText>
     <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero; 