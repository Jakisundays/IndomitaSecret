import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  /* @media screen and (max-width: 660px){
        height: 860px;
    } */
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: row;
  background-color: transparent !important;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
`;
export const LoginWrapper = styled.div`
  display: flex;
  border: 2px solid white;
  box-shadow: 4px 7px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const LoginInput = styled.input`
  margin: 5px;
  background-color: transparent !important;
  border: transparent !important;
  color: black;

  @media screen and (max-width: 660px) {
    background-color: #fff;
    border: solid black;
  }
`;

export const AiOutlineLock = styled.span`
  margin-left: 900px;
`;
