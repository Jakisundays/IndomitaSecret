import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-scroll";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;

  /* :before{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 0;
    } */
`;

// export const HeroBg = styled.div`
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
// `;

export const HeroContent = styled.div`
  /* z-index: 3; */
  max-width: 100vw;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 550px;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  text-shadow: 2px 2px #000;
  @media screen and (max-width: 760px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroH2 = styled.p`
  color: #fff;
  font-size: 30px;
  text-align: center;
  text-shadow: 2px 2px #000;

  @media screen and (max-width: 760px) {
    font-size: 36px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  text-shadow: 3px 2px #000;
  @media screen and (max-width: 760px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const Flecha = styled(AiOutlineDown)`
  color: white;
  font-size: 40px;
`;

export const Scroller = styled(Link)`
  position: absolute;
  bottom: 25px;
`;
