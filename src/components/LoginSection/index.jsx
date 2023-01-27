import React, { useEffect, useState } from "react";
import {
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginWrapper,
} from "./LoginElements";
import { AiOutlineLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import LoginBg from "/Users/jacobdominguez/Documents/club-indomita/src/images/pass3.gif";

const LoginSection = () => {
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (pass.toLowerCase() === "freedom") {
      navigate("/access");
    }
  }, [pass, navigate]);

  return (
    <LoginContainer style={{ backgroundImage: `url(${LoginBg})` }}>
      <LoginForm>
        <LoginWrapper>
          <AiOutlineLock />
          <LoginInput
            placeholder="password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </LoginWrapper>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginSection;
