import styled from "styled-components";

export const DiscordContainer = styled.div`
  background-color: #000;
  color: white;

  @media screen and (max-width: 760px) {
    padding: 100px 0;
  }
`;

export const DiscWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  max-width: 100vw;
  z-index: 1;
  margin-right: auto;
  margin-left: auto;
`;

export const DiscH1 = styled.h1`
  color: #fff;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const DiscLink = styled.a`
  font-size: 11em;
  color: #7289da;
`;
