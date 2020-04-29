import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Sidebar from "../Sidebar";
import Content from "../Main/Content";

const Activities = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <Content />
      </Wrapper>
    </>
  );
};

export default Activities;

const Wrapper = styled.div`
  display: flex;
  max-width: 1601px;
  margin: 0 auto;
`;
