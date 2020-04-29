import React from "react";
import styled from "styled-components";
import MyLogo from "../../assets/epod.png";

const Image = () => {
  return (
    <div className="app-logo">
      <AppLogo src={MyLogo} alt="app logo" />
    </div>
  );
};

export default Image;

const AppLogo = styled.img`
  width: 120px;
  margin-top: 22px;
  @media (max-width: 650px) {
    width: 105px;
  }
`;
