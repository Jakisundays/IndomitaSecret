import React from 'react';
import {Flecha, HeroContainer, HeroContent, HeroH1, HeroH2, HeroP} from './HeroElements'
import LoginBg from '/Users/jacobdominguez/Documents/club-indomita/src/images/bg01.gif'

const HeroSection = () => {
  return (
    <HeroContainer style={{ backgroundImage: `url(${LoginBg}) `}}>
       
        <HeroContent>
          <HeroH1>Te estabamos esperando.</HeroH1>
          <HeroH2>Bienvenido a: </HeroH2>
          <HeroP>Indómita Secret Society</HeroP>
        </HeroContent>
          <Flecha />
    </HeroContainer>
  )
}

export default HeroSection;
