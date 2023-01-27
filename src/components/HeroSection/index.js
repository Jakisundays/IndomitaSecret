import React from "react";
import {
  Scroller,
  Flecha,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
} from "./HeroElements";
import LoginBg from "/Users/jacobdominguez/Documents/club-indomita/src/images/bg01.gif";

const HeroSection = () => {
  return (
    <HeroContainer style={{ backgroundImage: `url(${LoginBg}) ` }}>
      <HeroContent>
        <HeroH1>We were waiting for you.</HeroH1>
        {/* <HeroH1>Te estabamos esperando.</HeroH1> */}
        <HeroH2>Welcome to: </HeroH2>
        {/* <HeroH2>Bienvenido a: </HeroH2> */}
        <HeroP>Indómita Secret Society</HeroP>
      </HeroContent>
      <Scroller
        to="reglas"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
      >
        <Flecha />
      </Scroller>
    </HeroContainer>
  );
};

export default HeroSection;
