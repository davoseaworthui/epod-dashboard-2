import React from "react";
import styled from "styled-components";

import EpodReports from "../../assets/epod-reports-01.svg";

const IconSettings = () => {
  return (
    <div>
      <LogoHolder src={EpodReports} alt="Epod Reports" />
    </div>
  );
};

export default IconSettings;
const LogoHolder = styled.img`
  margin-top: 2px;
  width: 1.75rem;
`;
